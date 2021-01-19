import logger from 'debug';
import axios from 'axios'
import { searchFactory, detailFactory } from '../factories'
import _ from 'lodash'

const loggerProd = logger('prod:search.service')
const loggerDev = logger('dev:search.service')

class SearchService {
  private getBestRepeatedCategory(items: any){
    const uniqueCategories = items.reduce((prev: string[], { category_id }:  { category_id: string }) => {
      prev.indexOf(category_id) < 0 && prev.push(category_id);
      return prev;
    }, [])

    const categories = items.map((item: any) => item.category_id);

    return uniqueCategories.reduce((prev: any[], category: string) => {
      const value = _.countBy(categories)[category];
      if(value > prev[0]) {
        prev[0] = value;
        prev[1] = category;
      }
      return prev;
    }, [0,""])[1]
  };

  private getCategoryTree(category_id: string){
    return new Promise((resolve, reject) => {
      this.axiosRequest(`https://api.mercadolibre.com/categories/${category_id}`)
        .then(({data}) => {
          resolve(data.path_from_root.map(({name}: {name: string}) => name))
        })
        .catch(error => reject(error.response.data))
    })
  };

  private axiosRequest(url: string){
    loggerDev(`  -      ℹ️ Call URL '${url}' from Mercado Libre API`);
    return axios.get(encodeURI(url));
  };

  search(query: string){
    loggerDev(`  -    🚘 getting products`);
    return new Promise((resolve, reject) => {
      this.axiosRequest(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
        .then(({data}) => {
          const searchCategory = this.getBestRepeatedCategory(data.results);
          loggerDev(`  -      ℹ️ Category '${searchCategory}' is the best repeated`);

          this.getCategoryTree(searchCategory)
            .then(categories => {
              const response = searchFactory({...data, categories});
              loggerDev(`  -      ℹ️ Response data '${JSON.stringify(response, null, 2)}'`);

              loggerDev(`  -    🏁 get products finish success`);
              resolve(response);
            })
            .catch(error => {
              loggerProd(`  -    ‍💥 get products finish with errors`);
              reject(error);
            })
        })
        .catch(error => {
          loggerProd(`  -    ‍💥 get products finish with errors`);
          reject(error.response.data);
        });
    });
  };

  getDetail(productId: string){
    loggerDev(`  -    🚘 getting product detail`);
    return new Promise((resolve, reject) => {
      const itemDetail = axios.get(`https://api.mercadolibre.com/items/${productId}`);
      const itemDescription = axios.get(`https://api.mercadolibre.com/items/${productId}/description`);

      Promise
        .all([itemDetail, itemDescription])
        .then(responses => responses.map(({data}) => data))
        .then(responses => {
          const [detail, description] = responses;
          this.getCategoryTree(detail.category_id)
            .then(categories => {
              const response = detailFactory({...detail, categories}, description);
              loggerDev(`  -      ℹ️ Response data '${JSON.stringify(response)}'`);

              loggerDev(`  -    🏁 get product detail finish success`);
              resolve(response);
            })
            .catch(error => {
              loggerProd(`  -    ‍💥 get product detail finish with errors`);
              reject(error);
            })
        })
        .catch(error => {
          loggerProd(`  -    ‍💥 get product detail finish with errors`);
          reject(error.response.data);
        });
    });
  };
}

export default new SearchService();
