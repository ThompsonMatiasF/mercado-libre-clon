import { types } from 'app/store/actions/search.actions';
import {Action, SearchResult} from 'app/types';

export interface InitialState {
  loading: boolean
  data: SearchResult | null
  error: any
}

export const initialState: InitialState = {
  loading: false,
  data: null,
  error: null,
};

const searchReducer = (state: InitialState, { type, payload }: Action): InitialState => {
  switch (type) {
    case types.LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.SUCCESS:
      return {
        loading: false,
        data: payload,
        error: null,
      };
    case types.ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default searchReducer;
