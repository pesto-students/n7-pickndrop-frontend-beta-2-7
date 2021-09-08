import { userConstants } from "../constants/userConstants";
import { userService } from "../services/userService";
import { history } from "../helpers/history";

export const userActions = {
	login,
	deliveryPartnerLogin,
    otpVerification,
	logout,
};

function login(email, phone, from) {
	return (dispatch) => {
		userService.login(email, phone).then(
			(user) => {
				dispatch(success(user));
				history.push(from);
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
	};

	function success(driver) {
		return { type: userConstants.DRIVER_LOGIN_SUCCESS, driver };
	}
	function failure(error) {
		return { type: userConstants.DRIVER_LOGIN_FAILURE, error };
	}
}

function otpVerification(otp) {
    return (dispatch) => {
		userService.otpVerification(otp).then(
			(user) => {
				dispatch(success(user));
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

function logout() {
	userService.logout();
	return { type: userConstants.LOGOUT };
}
