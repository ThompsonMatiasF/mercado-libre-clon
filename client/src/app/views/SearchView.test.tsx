import { render, screen } from '@testing-library/react'
import SearchView from './SearchView'
import { useRouteMatch } from 'react-router-dom'

jest.mock('react-router-dom', () =>({
  useRouteMatch: jest.fn(),
}))

describe('SearchView.tsx', () => {
  it.each([true, false])('Should match snapshot', (routerMatch) => {
    useRouteMatch.mockImplementationOnce(() => routerMatch)
    render(<SearchView />)

    const expectation = expect(screen.queryByText('Página de inicio'))
    routerMatch ? expectation.toBeInTheDocument() : expectation.toBeNull()
  })
})
