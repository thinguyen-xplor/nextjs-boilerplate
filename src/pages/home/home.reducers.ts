import { Action } from 'common/types';

import { GET_POSTS_SUCCESS } from './home.actions';
import { HomeState } from './home.types';

const initialState = {
  posts: [],
};

const reducers = (state = initialState, { type, payload }: Action): HomeState => {
  switch (type) {
    case GET_POSTS_SUCCESS: {
      return {
        ...state,
        posts: payload,
      };
    }

    default:
      return state;
  }
};

export default {
  home: reducers,
};
