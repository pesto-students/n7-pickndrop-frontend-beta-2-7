export const userService = {
	login,
	logout,
	driverLogin,
	userOtpVerification,
	driverOtpVerification,
	register,
};

async function login(email, phone) {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ email, phone }),
	};

	return fetch(`/users/authenticate`, requestOptions).then((user) => {
		// store user details and jwt token in local storage to keep user logged in between page refreshes
		localStorage.setItem("user", JSON.stringify(user));

		return user;
	});
}

async function driverLogin(email, phone) {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ email, phone }),
	};

	return fetch(`/driver/authenticate`, requestOptions).then((driver) => {
		// store user details and jwt token in local storage to keep user logged in between page refreshes
		localStorage.setItem("driver", JSON.stringify(driver));

		return driver;
	});
}

async function userOtpVerification(otp) {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(otp),
	};

	return fetch(`/user/otp/authenticate`, requestOptions).then((otp) => {
		// store user details and jwt token in local storage to keep user logged in between page refreshes
		localStorage.setItem("otp", JSON.stringify(otp));

		return otp;
	});
}

async function driverOtpVerification(otp) {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(otp),
	};

	return fetch(`/driver/otp/authenticate`, requestOptions).then((otp) => {
		// store user details and jwt token in local storage to keep user logged in between page refreshes
		localStorage.setItem("otp", JSON.stringify(otp));

		return otp;
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
			vehicleDetails,
			panCard,
			aadharCard,
			drivingLicense,
		}),
	};

	return fetch(`/driver/register`, requestOptions).then((driverDetails) => {
		// store user details and jwt token in local storage to keep user logged in between page refreshes
		localStorage.setItem("driverDetails", JSON.stringify(driverDetails));

		return driverDetails;
	});
}

function logout() {
	// remove user from local storage to log user out
	localStorage.removeItem("user");
}
