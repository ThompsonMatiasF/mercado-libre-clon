import { getDetail, types } from './detail.actions';
import { mockItemDetail } from 'app/helpers/mocks';
import axios from 'axios';
import * as breadcrumbActions from './breadcrumb.actions';

const mockDispatch = jest.fn()

const error = new Error('error')

const spySetBreadcrumb = jest.spyOn(breadcrumbActions, 'setBreadcrumb')

jest.mock('axios')

describe('detail.actions.ts', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Should get data succesessfully', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: { item: mockItemDetail } }))
    await getDetail('1', mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith({ type: types.LOADING })
    expect(spySetBreadcrumb).toHaveBeenCalled()
    expect(mockDispatch).toHaveBeenCalledWith({ type: types.SUCCESS, payload: { item: mockItemDetail } })
  })

  it('Should not get data succesessfully', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject({ error }))
    await getDetail('1', mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith({ type: types.LOADING })
    expect(mockDispatch).toHaveBeenCalledWith({ type: types.ERROR, payload: { error } })
  })
})
