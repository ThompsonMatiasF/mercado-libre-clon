import React, { useContext, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { ProductDetail } from 'app/components';
import { AppContext } from 'app/store';
import { getDetail } from 'app/store/actions/detail.actions';

export const DetailView = () => {
  const match = useRouteMatch<any>({
    path: '/items/:id',
    exact: true,
  });

  const id = match ? match.params.id : null;

  const { state: { detail: { loading, data } }, dispatch } = useContext(AppContext);

  useEffect(() => {
    id && getDetail(id, dispatch);
  }, [id, dispatch]);

  return match
    ? (
      loading
        ? <p>Loading detail...</p>
        : data
          && <ProductDetail data={data.item} />
    )
    : null;
};

export default React.memo(DetailView);
