import {combineReducers} from 'redux';
import currentUser, {getCurrentUser} from './currentUser';

export {getCurrentUser};

const rootReducer = combineReducers({
  currentUser,
});

export default rootReducer;