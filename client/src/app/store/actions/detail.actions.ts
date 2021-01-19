import { Dispatch } from 'react';
import axios from 'axios';
import { setBreadcrumb } from './breadcrumb.actions';
import { ItemResult } from 'app/types';

export const types = {
  LOADING: '[ DETAIL ] - loading fetch',
  SUCCESS: '[ DETAIL ] - success fetch',
  ERROR: '[ DETAIL ] - error fetch',
};

export const getDetail = async (id: string, dispatch: Dispatch<any>) => {
  dispatch({ type: types.LOADING });

  const type = process.env.REACT_APP_ENABLE_MOCK || 'api';
  const path = process.env.REACT_APP_ENABLE_MOCK ? 'test' : id;

  try {
    const { data }: { data: ItemResult } = await axios.get(`/${type}/items/${path}`)
    setBreadcrumb(data.item.categories, dispatch);
    dispatch({ type: types.SUCCESS, payload: data });
  } catch(error) {
    dispatch({ type: types.ERROR, payload: error })
  }
    // .then(({ data }: { data: ItemResult }) => {
    //   console.log('pasó')
    //   setBreadcrumb(data.item.categories, dispatch);
    //   dispatch({ type: types.SUCCESS, payload: data });
    // })
    // .catch(({ error }) => dispatch({ type: types.ERROR, payload: error }));
};

export default {
  getDetail,
};
