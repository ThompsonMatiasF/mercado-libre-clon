import React, { ReactElement } from 'react';
import { render, screen } from '@testing-library/react'
import ResultView from './ResultView'
import { useRouteMatch, useLocation } from 'react-router-dom'
import { MockContext, mockItem } from 'app/helpers/mocks';
import * as searchActions from 'app/store/actions/search.actions';

const spyGetSearch = jest.spyOn(searchActions, 'getSearch')

jest.mock('react-router-dom', () =>({
  useRouteMatch: jest.fn(),
  useLocation: jest.fn(),
}))

jest.mock('app/components', () => ({
  ProductItem: ({data}: {data: any}): ReactElement => <p>Product item</p>,
}))

const setContext = ( loading: boolean ) => ({
  state: {
    search: {
      loading,
      data: {
        items: [mockItem],
      },
    },
  },
  dispatch: jest.fn(),
})

describe('ResultView.tsx', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    useLocation.mockImplementation(() => ({ search: '' }))
  });

  const renderComponent = (routerMatch: boolean = true, loading: boolean = true) => {
    useRouteMatch.mockImplementationOnce(() => routerMatch)
    render(<MockContext context={setContext(loading)}><ResultView /></MockContext>)
  }

  it.each([
    [true, true, 'Loading results...'],
    [true, false, 'Product item'],
    [false, true, 'Loading results...'],
    [false, false, 'Loading results...'],
  ])('Should render based on route match and loading data state', (routerMatch, loading, searchText) => {
    renderComponent(routerMatch, loading)

    const expectation = expect(screen.queryByText(searchText))
    routerMatch ? expectation.toBeInTheDocument() : expectation.toBeNull()
  })

  it.each([
    ['=test', true],
    ['=', false],
    ['', false]
  ])('Should run effect only if queryParam search have content', (search, call) => {
    useLocation.mockImplementationOnce(() => ({ search }))
    renderComponent()

    const expectation = expect(spyGetSearch)
    call ? expectation.toBeCalled() : expectation.not.toBeCalled()
  })

})
