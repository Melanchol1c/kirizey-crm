import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'antd/dist/antd.css';

import './App.css';
import AppRouter from './router';

function App(): any {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
