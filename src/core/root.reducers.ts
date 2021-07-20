import { combineReducers } from 'redux';

import requestReducers from 'entities/request/request.reducers';
import postReducers from 'entities/post/post.reducers';

export default combineReducers({
  ...requestReducers,
  ...postReducers,
});
