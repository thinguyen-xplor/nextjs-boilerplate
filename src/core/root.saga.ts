import { all } from 'redux-saga/effects';

import postSaga from 'pages/home/home.saga';

function* rootSaga(): any {
  yield all([...postSaga]);
}

export default rootSaga;
