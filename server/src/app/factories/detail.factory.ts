import itemFactory from './item.factory'

const detailFactory = (detail: any, description: any) => ({
  item: {
    ...itemFactory(detail),
    categories: detail.categories,
    sold_quantity: detail.sold_quantity,
    description: description.plain_text,
  },
});

export default detailFactory;
