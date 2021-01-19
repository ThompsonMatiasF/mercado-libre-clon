import { render } from '@testing-library/react'
import Layout from './Layout'

describe('Layout.tsx', () => {
  it('should match snapshot', () => {
    const { container } = render(<Layout header={<p>header</p>}><p>children</p></Layout>)

    expect(container).toMatchSnapshot()
  })
})
