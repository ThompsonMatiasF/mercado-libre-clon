const itemFactory = (item: any) => ({
  id: item.id,
  title: item.title,
  price: {
    currency: item.currency_id,
    amount: item.price,
    decimals: item.price - Math.abs(item.price),
  },
  picture: item.pictures && item.pictures.length > 0 ? item.pictures[0].url : item.thumbnail,
  condition: item.condition === 'new' ? 'Nuevo' : 'Usado',
  free_shipping: item.shipping.free_shipping,
  address: item.seller_address.state.name,
});

export default itemFactory;
