import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import requestReducers from 'core/request.reducers';
import homeReducers from 'pages/home/home.reducers';
import { Reducer } from 'react';

const combinedReducers = combineReducers({
  ...requestReducers,
  ...homeReducers,
});

type RootState = ReturnType<typeof combinedReducers>;

const rootReducers: Reducer<RootState, AnyAction> = (state, action) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  }

  return combinedReducers(state, action);
};

export default rootReducers as any;
