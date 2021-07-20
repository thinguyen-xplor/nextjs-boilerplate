import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './root.reducers';
import rootSaga from './root.saga';

const bindMiddleware = (middleware: Array<SagaMiddleware>) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

export const makeStore = (): Store => {
  const initState = {};
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, initState, bindMiddleware([sagaMiddleware]));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const store = createWrapper(makeStore, { debug: true });

export default store;
