import { getSearch, types } from './search.actions';
import { mockSearchResult } from 'app/helpers/mocks';
import axios from 'axios';
import * as breadcrumbActions from './breadcrumb.actions';

const mockDispatch = jest.fn()

const error = new Error('error')

const spySetBreadcrumb = jest.spyOn(breadcrumbActions, 'setBreadcrumb')

jest.mock('axios')

describe('search.actions.ts', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Should get data succesessfully', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: mockSearchResult }))
    await getSearch('1', mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith({ type: types.LOADING })
    expect(spySetBreadcrumb).toHaveBeenCalled()
    expect(mockDispatch).toHaveBeenCalledWith({ type: types.SUCCESS, payload: mockSearchResult })
  })

  it('Should not get data succesessfully', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject({ error }))
    await getSearch('1', mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith({ type: types.LOADING })
    expect(mockDispatch).toHaveBeenCalledWith({ type: types.ERROR, payload: { error } })
  })
})
