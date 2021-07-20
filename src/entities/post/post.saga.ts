import { takeLatest, call, put } from 'redux-saga/effects';

import { GET_POSTS_START, getPostsSuccess } from 'entities/post/post.actions';
import { Post } from 'entities/post/post.types';
import services from 'entities/post/post.services';

export function* getPostsStart(): any {
  const result: Post[] = yield call(services.getPosts);
  yield put(getPostsSuccess(result));
}

export default [takeLatest(GET_POSTS_START, getPostsStart)];
