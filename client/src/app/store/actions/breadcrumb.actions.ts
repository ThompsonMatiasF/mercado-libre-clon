import { Dispatch } from 'react';

export const types = {
  SET: '[ BREADCRUMB ] - set categories',
};

export const setBreadcrumb = (categories: string[], dispatch: Dispatch<any>): void => {
  dispatch({ type: types.SET, payload: categories });
};

export default {
  setBreadcrumb,
};
