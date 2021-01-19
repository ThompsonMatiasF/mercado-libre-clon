import { render } from '@testing-library/react'
import Router from './Router'

describe('Router.tsx', () => {
  it('Should match snapshot', () => {
    const { container } = render(<Router>children</Router>)

    expect(container).toMatchSnapshot()
  })
})

