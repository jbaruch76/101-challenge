import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import images from './images';

const reducer = combineReducers({images});

const middleware = applyMiddleware(
  thunkMiddleware,
  logger
  );

const store = createStore(reducer, middleware);

export default store;
export * from './images';
