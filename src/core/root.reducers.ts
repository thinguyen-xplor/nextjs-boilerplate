import { combineReducers } from '@reduxjs/toolkit';

import requestReducers from 'core/request.reducers';
import homeReducers from 'pages/home/home.reducers';

export default combineReducers({
  ...requestReducers,
  ...homeReducers,
});
