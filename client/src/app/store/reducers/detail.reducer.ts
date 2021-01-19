import { types } from 'app/store/actions/detail.actions';
import { ItemResult, Action } from 'app/types';

export interface InitialState {
  loading: boolean
  data: ItemResult | null
  error: any
}

export const initialState: InitialState = {
  loading: false,
  data: null,
  error: null,
};

const detailReducer = (state: InitialState, { type, payload }: Action): InitialState => {
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

export default detailReducer;
