import React from 'react';
import { render } from '@testing-library/react'
import BreadCrumb from './BreadCrumb'
import { MockContext, mockCategories } from 'app/helpers/mocks'

const context = {
  state: {
    breadcrumb: {
      categories: mockCategories,
    },
  },
}

describe('BreadCrumb.tsx', () => {
  it('should match snapshot', () => {
    const { container } = render(<MockContext context={context}><BreadCrumb /></MockContext>)

    expect(container).toMatchSnapshot()
  })
})
