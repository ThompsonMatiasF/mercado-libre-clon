import React, { FC, useReducer, createContext } from 'react';
import rootReducer from './reducers';
import { InitialState as SearchState } from './reducers/search.reducer'
import { InitialState as DetailState } from './reducers/detail.reducer'
import { InitialState as BreadcrumbState } from './reducers/breadcrumb.reducer'

interface InitialState {
  search: SearchState
  detail: DetailState
  breadcrumb: BreadcrumbState
}

interface InitialContextProps {
  state: InitialState;
  dispatch: ({type}:{type:string}) => void;
}

export const AppContext = createContext({} as InitialContextProps);

const StoreProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(...rootReducer);
  return <AppContext.Provider value={{state, dispatch}}>{children}</AppContext.Provider>
};

export default StoreProvider;
