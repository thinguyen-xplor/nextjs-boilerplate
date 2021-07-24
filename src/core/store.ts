import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';

import rootReducers from './root.reducers';
import rootSaga from './root.saga';

const isDevMode = process.env.NODE_ENV !== 'production';

const configStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducers,
    middleware: [sagaMiddleware],
    devTools: isDevMode,
    preloadedState: {},
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(configStore, { debug: isDevMode });
