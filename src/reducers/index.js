/**
 * Redux Root Reducer
 * Combines reducers for large applications
 */
import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReducer from './techReducer';

// "log" is what we are calling the state for the log part of application.
// prop "log" is refererenced in Log.js, mapStateToProps
export default combineReducers({
  log: logReducer,
  tech: techReducer
});
