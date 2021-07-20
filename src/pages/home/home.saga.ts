import { takeLatest, call, put } from 'redux-saga/effects';

import { GET_POSTS_START, getPostsSuccess } from './home.actions';
import { Post } from './home.types';
import services from './home.services';

export function* getPostsStart(): any {
  const result: Post[] = yield call(services.getPosts);
  yield put(getPostsSuccess(result));
}

export default [takeLatest(GET_POSTS_START, getPostsStart)];
