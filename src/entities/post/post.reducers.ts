import { Action } from 'common/types';

import { GET_POSTS_SUCCESS } from './post.actions';
import { PostState } from './post.types';

const initialState = {
  posts: [],
};

const reducers = (state = initialState, { type, payload }: Action): PostState => {
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
  post: reducers,
};
