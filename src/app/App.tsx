import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'antd/dist/antd.css';

import './App.css';
import AppRouter from './AppRouter';
import configureStore from './store/configureStore';

const store = configureStore();

function App(): any {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
