import { BASE_URL } from "./apiurl";

export const userService = {
	login,
	logout,
	driverLogin,
	userOtpVerification,
	driverOtpVerification,
	driverRegistrationCheck,
	acceptTask,
	pickedTask,
	deliveredTask,
	cancelTask,
	register,
};

async function login(email, phone) {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ email, phone }),
	};

	return fetch(`${BASE_URL}/users/authenticate`, requestOptions).then((user) => {
		return user;
	});
}

async function driverLogin(email, phone) {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ email, phone }),
	};

	return fetch(`${BASE_URL}/driver/authenticate`, requestOptions).then((driver) => {
		return driver;
	});
}

async function userOtpVerification(otp, email, phone) {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ otp, email, phone }),
	};

	return fetch(`${BASE_URL}/user/otp/authenticate`, requestOptions).then((user) => {
		return user;
	});
}

async function driverOtpVerification(otp, email, phone) {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ otp, email, phone }),
	};

	return fetch(`${BASE_URL}/driver/otp/authenticate`, requestOptions).then((driver) => {
		return driver;
	});
}

async function driverRegistrationCheck(email, phone) {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ email, phone }),
	};

	return fetch(`${BASE_URL}/driver/checkRegistration`, requestOptions).then((driver) => {
		return driver;
	});
}

async function register(
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
	drivingLicense
) {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
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
		}),
	};

	return fetch(`${BASE_URL}/driver/register`, requestOptions).then((driverDetails) => {
		return driverDetails;
	});
}

async function acceptTask(orderId) {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ orderId }),
	};

	return fetch(`${BASE_URL}/tasks/accept`, requestOptions).then((task) => {
		return task;
	});
}

async function pickedTask(orderId) {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ orderId }),
	};

	return fetch(`${BASE_URL}/tasks/pickedup`, requestOptions).then((task) => {
		return task;
	});
}

async function deliveredTask(orderId) {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ orderId }),
	};

	return fetch(`${BASE_URL}/tasks/delivered`, requestOptions).then((task) => {
		return task;
	});
}

async function cancelTask(orderId) {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ orderId }),
	};

	return fetch(`${BASE_URL}/tasks/cancel`, requestOptions).then((task) => {
		return task;
	});
}

function logout() {
	// remove user from local storage to log user out
	localStorage.removeItem("user");
}
