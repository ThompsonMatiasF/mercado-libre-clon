import React, { FC } from 'react';
import { AppContext } from 'app/store';

interface MockContextProps {
  context: any
}

export const MockContext: FC<MockContextProps> = ({ context, children })  => (
  <AppContext.Provider value={ context }>{ children }</AppContext.Provider>
)

export const mockCategories = ['Celulares y Teléfonos', 'Celulares y Smartphones']

const mockPrice = {
  currency: 'ARS',
  amount: 100,
  decimals: 0,
}

export const mockItem = {
  id: 'MLA844506827',
  title: 'Iphone X 128gb',
  price: mockPrice,
  picture: 'https://domain.com/image.png',
  condition: 'new',
  free_shipping: true,
  address: 'Capital Federal',
}

export const mockItemDetail = {
  ...mockItem,
  categories: mockCategories,
  sold_quantity: 2,
  description: 'Iphone X 128g, nuevo, en caja cerrada con garantía oficial',
}

export const mockItems = Array(5).fill(mockItem)

export const mockSearchResult = {
  categories: mockCategories,
  items: mockItems,
}

export default {
  MockContext,
  mockItems,
  mockItem,
  mockItemDetail,
  mockSearchResult,
}

