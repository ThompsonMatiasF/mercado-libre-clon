import { Request, Response, NextFunction } from 'express';
import logger from 'debug'
import searchService from '../services/search.service'
import createError from 'http-errors'

// interface AuthorRequest extends Request {
//   author: {}
// }

const loggerProd = logger('prod:api.controller')
const loggerDev = logger('dev:api.controller')

const getItems = ({author, ...req}: any, res: Response, next: NextFunction) => {
  const query: any = req.query.q || '';

  loggerDev(`  -  📍 Call search service for Query '${query}'`);
  searchService
    .search(query)
    .then((data: any) => {
      if (data.items.length === 0) {
        loggerDev(`  -  🙄 Query '${query}' has no results`);
        next(createError(204));
      } else {
        loggerDev(`  -  🤓 send Query '${query}' data result`);
        res.send({
          author,
          ...data,
        });
      }
    })
    .catch((error: any) => {
      loggerProd(`  -  🤬 send Query '${query}' data error`);
      next(createError(error.status || 500));
    });
};

const getItem = ({author, ...req}: any, res: Response, next: NextFunction) => {
  const productId = req.params.id;

  loggerDev(`  -  📍 Call search service for Product ID '${productId}'`);
  searchService
    .getDetail(productId)
    .then((data: any) => {
      loggerDev(`  -  🤓 send Product ID '${productId}' data result`);
      res.json({
        author,
        ...data,
      });
    })
    .catch((error: any) => {
      loggerProd(`  -  🤬 send Product ID '${productId}' data error`);
      next(createError(error.status || 500));
    });
};

export default {
  getItems,
  getItem,
};
