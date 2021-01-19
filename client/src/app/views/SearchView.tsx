import React from 'react';
import { useRouteMatch } from 'react-router-dom';

export const SearchView = () => {
  const match = useRouteMatch({
    path: '/',
    exact: true,
  });

  return match
    ? <p>Página de inicio</p>
    : null;
};

export default SearchView;
