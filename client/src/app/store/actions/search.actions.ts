import { Dispatch } from 'react';
import axios from 'axios';
import { setBreadcrumb } from 'app/store/actions/breadcrumb.actions';
import { SearchResult } from 'app/types'

export const types = {
  LOADING: '[ SEARCH ] - loading fetch',
  SUCCESS: '[ SEARCH ] - success fetch',
  ERROR: '[ SEARCH ] - error fetch',
};

export const getSearch = async (query: string, dispatch: Dispatch<any>) => {
  dispatch({ type: types.LOADING });

  const type = process.env.REACT_APP_ENABLE_MOCK || 'api';
  const param = process.env.REACT_APP_ENABLE_MOCK ? 'test' : query;

  try {
    const { data }: { data: SearchResult } = await axios.get(`/${type}/items?q=${param}`)
    setBreadcrumb(data.categories, dispatch);
    dispatch({ type: types.SUCCESS, payload: data });
  } catch(error) {
    dispatch({ type: types.ERROR, payload: error })
  }
  // axios
  //   .get(`/${type}/items?q=${param}`)
  //   .then(({ data }: { data: SearchResult }) => {
  //      setBreadcrumb(data.categories, dispatch);
  //     dispatch({ type: types.SUCCESS, payload: data });
  //   })
  //   .catch(({ error }) => dispatch({ type: types.ERROR, payload: error }));
};

export default {
  getSearch,
};
