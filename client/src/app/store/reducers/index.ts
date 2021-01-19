import combineReducers from 'react-combine-reducers';
import searchReducer, { initialState as searchInitialState } from './search.reducer';
import detailReducer, { initialState as detailInitialState } from './detail.reducer';
import breadcrumbReducer, { initialState as breadcrumbInitialState } from './breadcrumb.reducer';

export default combineReducers({
  search: [searchReducer, searchInitialState],
  detail: [detailReducer, detailInitialState],
  breadcrumb: [breadcrumbReducer, breadcrumbInitialState],
});
