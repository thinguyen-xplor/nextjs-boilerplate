import { configureStore, Store } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';

import rootReducers from './root.reducers';
import rootSaga from './root.saga';

const isDevMode = process.env.NODE_ENV !== 'production';

export const makeStore = (): Store => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    preloadedState: {},
    reducer: rootReducers,
    middleware: [sagaMiddleware],
    devTools: isDevMode,
  });

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: isDevMode });
