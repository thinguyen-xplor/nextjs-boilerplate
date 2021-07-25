import { Reducer } from 'react';
import {
  AnyAction,
  CombinedState,
  configureStore,
  ReducersMapObject,
  Store,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

import { GlobalState } from 'common/types';

import rootReducers from './root.reducers';
import rootSaga from './root.saga';

const isDevMode = process.env.NODE_ENV !== 'production';

const configReducers: Reducer<GlobalState, AnyAction> = (state, action) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  }

  return rootReducers(state, action);
};

export const makeStore = (): Store => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: configReducers,
    middleware: [sagaMiddleware],
    devTools: isDevMode,
    preloadedState: {},
  });

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: isDevMode });
