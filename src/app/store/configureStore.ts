import { createStore, applyMiddleware, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import rootReducer from './rootReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function configureStore() {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(apiMiddleware)));
}
