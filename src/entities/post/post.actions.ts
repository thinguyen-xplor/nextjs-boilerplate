import { flattenRequestAction } from 'utils';

const { GET_POSTS_START, GET_POSTS_SUCCESS, getPostsStart, getPostsSuccess } =
  flattenRequestAction('get_posts');

export { GET_POSTS_START, GET_POSTS_SUCCESS, getPostsStart, getPostsSuccess };
