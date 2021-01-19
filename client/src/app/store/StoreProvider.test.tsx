import { render } from '@testing-library/react'
import StoreProvider from './'

describe('store', () => {
  it('should match snapshot', () => {
    const { container } = render(<StoreProvider>children</StoreProvider>)

    expect(container).toMatchSnapshot()
  })
})
