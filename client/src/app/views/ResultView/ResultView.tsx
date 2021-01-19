import React, { useContext, useEffect } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';
import { ProductItem } from 'app/components';
import { AppContext } from 'app/store';
import { getSearch } from 'app/store/actions/search.actions';
import './ResultView.scss';

export const ResultView = () => {
  const match = useRouteMatch({
    path: '/items',
    exact: true,
  });

  const { search } = useLocation();

  const query = new URLSearchParams(search).get('search') || '';

  const { state: { search: { loading, data } }, dispatch } = useContext(AppContext);

  useEffect(() => {
    search !== '' && search.split('=')[1].trim() &&
      getSearch(query, dispatch);
  }, [search, query, dispatch]);

  return match
    ? (
      loading
        ? <p>Loading results...</p>
        : data
          && (
            <ol className="bg-white results">
              {
                data.items.map((item) => (
                  <ProductItem key={item.id} data={item} />
                ))
              }
            </ol>
          )
    )
    : null;
};

export default ResultView;
