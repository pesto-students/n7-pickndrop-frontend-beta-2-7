import { combineReducers } from 'redux';
import { authentication, driverAuthentication, userOtpAuthentication, driverOtpAuthentication } from './userReducer';

const rootReducer = combineReducers({
    authentication,
    driverAuthentication,
    userOtpAuthentication,
    driverOtpAuthentication
});

export default rootReducer;