import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'antd/dist/antd.css';

import './App.css';
import AppRouter from './AppRouter';
import configureStore from './store/configureStore';
import AppLoader from './components/AppLoader/AppLoader';

const store = configureStore();

function App(): any {
  return (
    <Provider store={store}>
      <AppLoader>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AppLoader>
    </Provider>
  );
}

export default App;
