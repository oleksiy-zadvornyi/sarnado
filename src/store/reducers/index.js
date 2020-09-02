import {combineReducers} from 'redux';

import toast from './toast';
import networkIndicator from './networkIndicator';
import user from './user';
import profile from './profile';
import purse from './purse';
import orders from './orders';

export default combineReducers({
  toast,
  networkIndicator,
  user,
  profile,
  purse,
  orders,
});
