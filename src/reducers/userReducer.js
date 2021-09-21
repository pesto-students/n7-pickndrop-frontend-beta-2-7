import { userConstants } from "../constants/userConstants";

const userInitialState = {
	user: {},
};

const driverInitialState = {
	driver: {},
	alreadyRegistered: false,
};

const otpInitialState = { loggedIn: false, otp: "", user: {}, error: "" };

const driverOtpInitialState = { driverLoggedIn: false, otp: "", driver: {}, error: ""};

const registerInitialState = {
	firstName: "",
	lastName: "",
	fatherName: "",
	city: "",
	completeAddress: "",
	language: "",
	date: "",
	emergencyContact: "",
	workExperience: "",
	vehicleDetails: "",
	panCard: "",
	aadharCard: "",
	drivingLicense: "",
};

export function authentication(state = userInitialState, action) {
	switch (action.type) {
		case userConstants.LOGIN_SUCCESS:
			return {
				...state,
				user: action.user,
			};
		case userConstants.LOGIN_FAILURE:
			return {};
		case userConstants.LOGOUT:
			return {};
		default:
			return state;
	}
}

export function driverAuthentication(state = driverInitialState, action) {
	switch (action.type) {
		case userConstants.DRIVER_LOGIN_SUCCESS:
			return {
				...state,
				driver: action.driver,
			};
		case userConstants.DRIVER_LOGIN_FAILURE:
			return {};
		case userConstants.DRIVER_REGISTRATION_CHECK_SUCCESS:
			return {
				...state,
				alreadyRegistered: false,
			}
		case userConstants.DRIVER_REGISTRATION_CHECK_FAILURE:
			return {
				...state,
				alreadyRegistered: true,
			}
		case userConstants.LOGOUT:
			return {};
		default:
			return state;
	}
}

export function userOtpAuthentication(state = otpInitialState, action) {
	switch (action.type) {
		case userConstants.OTP_VERIFICATION_SUCCESS:
			return {
				...state,
				loggedIn: true,
				otp: action.otp,
				user: action.user,
			};
		case userConstants.OTP_VERIFICATION_FAILURE:
			return {
				...state,
				error: action.error,
			};
		case userConstants.LOGOUT:
			return {};
		default:
			return state;
	}
}

export function driverOtpAuthentication(state = driverOtpInitialState, action) {
	switch (action.type) {
		case userConstants.DRIVER_OTP_VERIFICATION_SUCCESS:
			return {
				...state,
				driverLoggedIn: true,
				otp: action.otp,
				driver: action.driver,
			};
		case userConstants.DRIVER_OTP_VERIFICATION_FAILURE:
			return {
				...state,
				error: action.error,
			};
		case userConstants.LOGOUT:
			return {};
		default:
			return state;
	}
}

export function register(state = registerInitialState, action) {
	switch (action.type) {
		case userConstants.REGISTER_SUCCESS:
			return {
				...state,
				firstName: action.firstName,
				lastName: action.lastName,
				fatherName: action.fatherName,
				city: action.city,
				completeAddress: action.completeAddress,
				language: action.language,
				date: action.date,
				emergencyContact: action.emergencyContact,
				workExperience: action.workExperience,
				vehicleDetails: action.vehicleDetails,
				panCard: action.panCard,
				aadharCard: action.aadharCard,
				drivingLicense: action.drivingLicense,
			};
		case userConstants.REGISTER_FAILURE:
			return {};
		default:
			return state;
	}
}
