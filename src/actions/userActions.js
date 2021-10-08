import { unstable_createMuiStrictModeTheme } from "@material-ui/core";
import { userConstants } from "../constants/userConstants";
import { userService } from "../services/userService";

export const userActions = {
  login,
  deliveryPartnerLogin,
  userOtpVerification,
  driverOtpVerification,
  register,
  acceptOrder,
  pickedUpOrder,
  deliveredOrder,
  cancelOrder,
  logout,
};

function login(email, phone) {
  return (dispatch) => {
    userService.login(email, phone).then(
      (user) => {
        dispatch(success(user));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function deliveryPartnerLogin(email, phone) {
  return (dispatch) => {
    userService.driverLogin(email, phone).then(
      (driver) => {
        dispatch(success(driver));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );

    function success(driver) {
      return { type: userConstants.DRIVER_LOGIN_SUCCESS, driver };
    }
    function failure(error) {
      return { type: userConstants.DRIVER_LOGIN_FAILURE, error };
    }
  };
}

function userOtpVerification(otp, email, phone) {
  return (dispatch) => {
    userService.userOtpVerification(otp, email, phone).then(
      (user) => {
        if (user.status === 500) {
          dispatch(failure("Authentication failed"));
        } else {
          dispatch(success(user));
        }
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function success(user) {
    return { type: userConstants.OTP_VERIFICATION_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.OTP_VERIFICATION_FAILURE, error };
  }
}

function driverOtpVerification(driverOtp, email, phone) {
  return (dispatch) => {
    userService.driverOtpVerification(driverOtp, email, phone).then(
      (driver) => {
        if (driver.status === 500) {
          dispatch(failure("Authentication failed"));
        } else {
          dispatch(success(driver));
        }
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function success(driver) {
    return { type: userConstants.DRIVER_OTP_VERIFICATION_SUCCESS, driver };
  }
  function failure(error) {
    return { type: userConstants.DRIVER_OTP_VERIFICATION_FAILURE, error };
  }
}

function register(
  firstName,
  lastName,
  fatherName,
  city,
  completeAddress,
  language,
  date,
  emergencyContact,
  workExperience,
  preferredLocation,
  vehicleDetails,
  panCard,
  aadharCard,
  drivingLicense,
  avatar,
  userId
) {
  return (dispatch) => {
    userService
      .register(
        firstName,
        lastName,
        fatherName,
        city,
        completeAddress,
        language,
        date,
        emergencyContact,
        workExperience,
        preferredLocation,
        vehicleDetails,
        panCard,
        aadharCard,
        drivingLicense,
        avatar,
        userId
      )
      .then(
        (driverDetails) => {
          dispatch(success(driverDetails));
        },
        (error) => {
          dispatch(failure(error.toString()));
        }
      );
  };

  function success(driverDetails) {
    return { type: userConstants.REGISTER_SUCCESS, ...driverDetails };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}

function acceptOrder(orderID) {
  return (dispatch) => {
    userService.acceptTask(orderID).then(
      (task) => {
        dispatch(success(task));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function success(task) {
    return { type: userConstants.ACCEPT_TASK_SUCCESS, task };
  }
  function failure(error) {
    return { type: userConstants.ACCEPT_TASK_FAILURE, error };
  }
}

function pickedUpOrder(orderID) {
  return (dispatch) => {
    userService.pickedTask(orderID).then(
      (task) => {
        dispatch(success(task));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function success(task) {
    return { type: userConstants.PICKUP_TASK_SUCCESS, task };
  }
  function failure(error) {
    return { type: userConstants.PICKUP_TASK_FAILURE, error };
  }
}

function deliveredOrder(orderID) {
  return (dispatch) => {
    userService.deliveredTask(orderID).then(
      (task) => {
        dispatch(success(task));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function success(task) {
    return { type: userConstants.DELIVERED_TASK_SUCCESS, task };
  }
  function failure(error) {
    return { type: userConstants.DELIVERED_TASK_FAILURE, error };
  }
}

function cancelOrder(orderID) {
  return (dispatch) => {
    userService.cancelTask(orderID).then(
      (task) => {
        dispatch(success(task));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function success(task) {
    return { type: userConstants.CANCEL_TASK_SUCCESS, task };
  }
  function failure(error) {
    return { type: userConstants.CANCEL_TASK_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}
