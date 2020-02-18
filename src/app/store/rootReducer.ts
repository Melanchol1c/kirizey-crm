import { combineReducers } from 'redux';

import auth from '../auth/store/reducer';
import company from '../client/company/store/reducer';

export default combineReducers({
  auth,
  company,
});
