import detailReducer from './detail.reducer'
import { types } from 'app/store/actions/detail.actions'
import { mockItemDetail } from 'app/helpers/mocks';

describe('detail.reducer.ts', () => {
  it.each([
    [
      { loading: false },
      { type: types.LOADING },
      { loading: true },
    ],
    [
      { loading: true, data: null, error: 'error' },
      { type: types.SUCCESS, payload: mockItemDetail },
      { loading: false, data: mockItemDetail, error: null },
    ],
    [
      { loading: true, data: mockItemDetail, error: null },
      { type: types.ERROR, payload: 'error' },
      { loading: false, data: mockItemDetail, error: 'error' },
    ],
  ])('Should return updated state', (prev, action, expected) => {
    expect(detailReducer(prev, action)).toEqual(expected)
  })
})
