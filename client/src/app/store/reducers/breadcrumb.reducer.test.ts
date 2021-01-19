import breadcrumbReducer from './breadcrumb.reducer'
import { types } from 'app/store/actions/breadcrumb.actions'
import { mockCategories } from 'app/helpers/mocks';

describe('breadcrumb.reducer.ts', () => {
  it.each([
    [
      { categories: [] },
      { type: types.SET, payload: mockCategories },
      { categories: mockCategories },
    ],
  ])('Should return updated state', (prev, action, expected) => {
    expect(breadcrumbReducer(prev, action)).toEqual(expected)
  })
})
