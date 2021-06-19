import { createStore as createReduxStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './modules';

const createStore = () => {
  const store = createReduxStore(rootReducer, applyMiddleware(promiseMiddleware, thunkMiddleware));

  return store;
};

export default createStore;
