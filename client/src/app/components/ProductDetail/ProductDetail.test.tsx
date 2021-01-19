import { render } from '@testing-library/react'
import ProductDetail from './ProductDetail'
import { mockItemDetail } from 'app/helpers/mocks';

describe('ProductDetail.tsx', () => {
  it('Should match snapshot', () => {
    const { container } = render(<ProductDetail data={mockItemDetail} />)

    expect(container).toMatchSnapshot()
  })
})
