import { combineReducers } from 'redux';
import { authentication, driverAuthentication } from './userReducer';

const rootReducer = combineReducers({
    authentication,
    driverAuthentication
});

export default rootReducer;