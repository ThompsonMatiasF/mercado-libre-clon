import React, { FC } from 'react';
import { Router as BrowserRouter } from 'react-router-dom';
import { history } from '.';

const Router: FC = ({ children }) => (
  <BrowserRouter history={history}>
    {children}
  </BrowserRouter>
);

export default Router;
