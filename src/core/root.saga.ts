import { all } from 'redux-saga/effects';

import postSaga from 'entities/post/post.saga';

export default function* rootSaga(): any {
  yield all([...postSaga]);
}
