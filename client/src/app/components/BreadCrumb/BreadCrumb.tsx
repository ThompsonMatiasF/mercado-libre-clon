import React, { useContext } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import './BreadCrumb.scss';
import { AppContext } from 'app/store';

export const BraedCrumb = () => {
  const { state: { breadcrumb: { categories } } } = useContext(AppContext);

  return (
    <Breadcrumb>
      { categories
      && categories.map((category: string) => <Breadcrumb.Item key={Math.random()} active>{ category }</Breadcrumb.Item>)}
    </Breadcrumb>
  );
};

export default BraedCrumb;
