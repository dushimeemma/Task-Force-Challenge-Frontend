import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';

import { AppState } from './types';
import rootSaga from './sagas';
import todos from './reducers/todo';

const isProduction = process.env.NODE_ENV === 'production';
const saga = createSagaMiddleware();
const bindMiddleware = (middleware: any) => {
  if (!isProduction) {
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

const reducers = combineReducers<AppState>({
  todos,
});

const store = createStore(reducers, bindMiddleware([saga]));

export const makeStore = () => {
  saga.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, {});

export default store;
