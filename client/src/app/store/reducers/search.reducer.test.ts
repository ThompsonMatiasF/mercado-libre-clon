import searchReducer from './search.reducer'
import { types } from 'app/store/actions/search.actions'
import { mockSearchResult } from 'app/helpers/mocks';

describe('search.reducer.ts', () => {
  it.each([
    [
      { loading: false },
      { type: types.LOADING },
      { loading: true },
    ],
    [
      { loading: true, data: null, error: 'error' },
      { type: types.SUCCESS, payload: mockSearchResult },
      { loading: false, data: mockSearchResult, error: null },
    ],
    [
      { loading: true, data: mockSearchResult, error: null },
      { type: types.ERROR, payload: 'error' },
      { loading: false, data: mockSearchResult, error: 'error' },
    ],
  ])('Should return updated state', (prev, action, expected) => {
    expect(searchReducer(prev, action)).toEqual(expected)
  })
})
