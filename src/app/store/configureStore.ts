import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import apiMiddleware from '../api/middleware/api';
import rootReducer from './rootReducer';

declare global {
  interface Window {
    // eslint-disable-next-line no-undef
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ serialize: true }) || compose;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function configureStore() {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware, apiMiddleware)));
}
