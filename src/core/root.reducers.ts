import { combineReducers } from 'redux';

import requestReducers from 'core/request.reducers';
import postReducers from 'pages/home/home.reducers';

export default combineReducers({
  ...requestReducers,
  ...postReducers,
});
