import { render, screen, fireEvent, act } from '@testing-library/react'
import { history } from 'app/router';
import SearchBar from './SearchBar'

jest.mock('app/router', () => ({
  history: {
    push: jest.fn(),
  },
}))

describe('SearchBar.tsx', () => {
  it.each([
    'iphone',
    'samsung',
    'motorola',
  ])("Should navigate to result view with queryParam property '?q='%s''", async (query) => {
    render(<SearchBar />)
    await act(async () => {
      fireEvent.change(await screen.findByTestId('search-input'), { target: { value: query } })
      fireEvent.click(await screen.findByTestId('search-submit'))
    })

    expect(history.push).toBeCalledWith(`/items?search=${query}`)
  })
})
