import { userConstants } from "../constants/userConstants";
import { userService } from "../services/userService";
import { history } from "../helpers/history";

export const userActions = {
	login,
	deliveryPartnerLogin,
	userOtpVerification,
	driverOtpVerification,
	register,
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

function userOtpVerification(otp) {
	return (dispatch) => {
		userService.userOtpVerification(otp).then(
			(otp) => {
				dispatch(success(otp));
			},
			(error) => {
				dispatch(failure(error.toString()));
			}
		);
	};

	function success(otp) {
		return { type: userConstants.OTP_VERIFICATION_SUCCESS, otp };
	}
	function failure(error) {
		return { type: userConstants.OTP_VERIFICATION_FAILURE, error };
	}
}

function driverOtpVerification(driverOtp) {
	return (dispatch) => {
		userService.driverOtpVerification(driverOtp).then(
			(driverOtp) => {
				dispatch(success(driverOtp));
				history.push('/register');
			},
			(error) => {
				dispatch(failure(error.toString()));
			}
		);
	};

	function success(driverOtp) {
		return { type: userConstants.DRIVER_OTP_VERIFICATION_SUCCESS, driverOtp };
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
	vehicleDetails,
	panCard,
	aadharCard,
	drivingLicense
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
				vehicleDetails,
				panCard,
				aadharCard,
				drivingLicense
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
		return { type: userConstants.REGISTER_SUCCESS, driverDetails };
	}
	function failure(error) {
		return { type: userConstants.REGISTER_FAILURE, error };
	}
	
}

function logout() {
	userService.logout();
	return { type: userConstants.LOGOUT };
}
