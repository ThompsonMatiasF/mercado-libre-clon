export interface Author {
  name: string
  lastName: string
}

export interface Price {
  currency: string
  amount: number
  decimals: number
}

export interface Item {
  id: string
  title: string
  price: Price
  picture: string
  condition: string
  free_shipping: boolean
  address: string
}

export interface DetailItem extends Item {
  categories: string[]
  sold_quantity: number
  description: string
}

export interface ItemResult extends Author {
  item: DetailItem
}

export interface SearchResult extends Author {
  categories: string[]
  items: Item[]
}

export interface Action {
  type: string
  payload: any
}
