import '@axios-mock-db';
import React from 'react';
import StoreProvider from 'app/store';
import { SearchView, ResultView, DetailView } from 'app/views';
import { Layout } from 'app/layout';
import { BreadCrumb, SearchBar } from 'app/components';
import Router from './router';

const App = () => (
  <StoreProvider>
    <Router>
      <Layout header={<SearchBar />}>
        <BreadCrumb />
        <SearchView />
        <ResultView />
        <DetailView />
      </Layout>
    </Router>
  </StoreProvider>
);

export default App;
