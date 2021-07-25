import { Reducer } from 'react';
import { AnyAction } from '@reduxjs/toolkit';

import { RequestState } from 'common/types';

const reducers: Reducer<RequestState, AnyAction> = (state = {}, { type }) => {
  const matches = /(.*)_(START|SUCCESS|FAILED)/.exec(type);

  if (!matches) return state;

  const [, requestName, requestState] = matches;
  const requestLoadingName = `${requestName}_LOADING`;
  const requestSuccessName = `${requestName}_SUCCESS`;
  const requestFailedName = `${requestName}_FAILED`;

  return {
    ...state,
    [requestLoadingName]: requestState === 'START',
    [requestSuccessName]: requestState === 'SUCCESS',
    [requestFailedName]: requestState === 'FAILED',
  };
};

export default {
  request: reducers,
};
