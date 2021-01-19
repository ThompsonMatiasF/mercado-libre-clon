import { render, screen } from '@testing-library/react'
import DetailView from './DetailView'
import { useRouteMatch } from 'react-router-dom'
import { MockContext } from 'app/helpers/mocks';
import * as detailActions from 'app/store/actions/detail.actions';

const spyGetDetail = jest.spyOn(detailActions, 'getDetail')

jest.mock('react-router-dom', () =>({
  useRouteMatch: jest.fn(),
}))

jest.mock('app/components', () => ({
  ProductDetail: ({data}: {data: any}) => <p>Product detail</p>,
}))

const setContext = ( loading: boolean ) => ({
  state: {
    detail: {
      loading,
      data: {},
    },
  },
  dispatch: jest.fn(),
})

describe('DetailView.tsx', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  });

  const renderComponent = (routerMatch: any, loading: boolean) => {
    useRouteMatch.mockImplementationOnce(() => routerMatch)
    render(<MockContext context={setContext(loading)}><DetailView /></MockContext>)
  }

  it.each([
    [{ params: { id: 1 } }, true, 'Loading detail...'],
    [{ params: { id: 1 } }, false, 'Product detail'],
    [null, true, 'Loading detail...'],
    [null, false, 'Loading detail...'],
  ])('Should render based on route match and loading data state', (routerMatch, loading, searchText) => {
    renderComponent(routerMatch, loading)

    const expectation = expect(screen.queryByText(searchText))
    routerMatch ? expectation.toBeInTheDocument() : expectation.toBeNull()
  })

  it.each([
    [{ params: { id: 1 } }, true],
    [null, false],
  ])('Should run effect only if router match', (routerMatch, loading) => {
    renderComponent(routerMatch, loading)

    const expectation = expect(spyGetDetail)
    routerMatch ? expectation.toBeCalled() : expectation.not.toBeCalled()
  })

})
