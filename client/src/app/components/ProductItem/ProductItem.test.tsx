import { render, screen } from '@testing-library/react'
import ProductItem from './ProductItem'
import { mockItem } from 'app/helpers/mocks';

describe('ProductItem.tsx', () => {
  it('Should match snapshot', () => {
    const { container } = render(<ProductItem data={mockItem} />)

    expect(container).toMatchSnapshot()
  })

  it.each([true, false])('Should evaluate free_shipping field to show shipping image', (freeShipping) => {
    const customMock = {...mockItem, free_shipping: freeShipping }
    const { container } = render(<ProductItem data={customMock} />)

    const expectation = expect(container.querySelectorAll('img').length)
    freeShipping ? expectation.toEqual(2) : expectation.toEqual(1)
  })
})
