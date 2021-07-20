import { all } from 'redux-saga/effects';

import postSaga from 'pages/home/home.saga';

export default function* rootSaga(): any {
  yield all([...postSaga]);
}
