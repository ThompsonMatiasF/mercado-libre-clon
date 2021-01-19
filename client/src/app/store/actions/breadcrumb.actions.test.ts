import breadcrumbActions, { types } from './breadcrumb.actions'
import { mockCategories } from 'app/helpers/mocks';

const dispatchMock = jest.fn()

describe('breadcrumb.actions.ts', () => {
  it('should dispatch action to update breadcrumb', () => {
    breadcrumbActions.setBreadcrumb(mockCategories, dispatchMock)

    expect(dispatchMock).toHaveBeenCalledWith({ type: types.SET, payload: mockCategories })
  })
})
