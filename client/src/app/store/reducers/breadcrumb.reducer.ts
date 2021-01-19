import { types } from 'app/store/actions/breadcrumb.actions';
import { Action } from 'app/types';

export interface InitialState {
  categories: string[]
}

export const initialState = {
  categories: [],
};

const breadcrumbReducer = (state: InitialState, { type, payload }: Action): InitialState => {
  switch (type) {
    case types.SET:
      return {
        categories: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default breadcrumbReducer;
