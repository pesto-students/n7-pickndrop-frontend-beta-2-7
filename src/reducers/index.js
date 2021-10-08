import { combineReducers } from "redux";
import {
  authentication,
  driverAuthentication,
  userOtpAuthentication,
  driverOtpAuthentication,
  register,
  task,
} from "./userReducer";

const rootReducer = combineReducers({
  authentication,
  driverAuthentication,
  userOtpAuthentication,
  driverOtpAuthentication,
  register,
  task,
});

export default rootReducer;
