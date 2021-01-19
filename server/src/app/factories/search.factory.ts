import itemFactory from './item.factory'

const searchFactory = (data: any) => ({
  categories: data.categories,
  items: data.results
    .filter((item: any, i: number) => i < (process.env.ITEM_QTY ? parseInt(process.env.ITEM_QTY) : Number.MAX_SAFE_INTEGER))
    .map((item: any) => ({
        ...itemFactory(item),
      })
    ),
});

export default searchFactory;
