import { createReducer } from '@reduxjs/toolkit';

import { GET_POSTS_SUCCESS } from './home.actions';
import { HomeState } from './home.types';

const initialState = {
  posts: [],
};

const reducers = createReducer<HomeState>(initialState, (builder) => {
  builder.addCase(GET_POSTS_SUCCESS, (state, action) => ({
    ...state,
    posts: action.payload.slice(0, 20),
  }));
});

export default {
  home: reducers,
};
