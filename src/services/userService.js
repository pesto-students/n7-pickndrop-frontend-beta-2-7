
export const userService = {
    login,
    logout,
    driverLogin,
    otpVerification,
};

async function login(email, phone) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, phone })
    };

    return fetch(`/users/authenticate`, requestOptions)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

async function driverLogin(email, phone) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, phone })
    };

    return fetch(`/driver/authenticate`, requestOptions)
        .then(driver => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('driver', JSON.stringify(driver));

            return driver;
        });
}

async function otpVerification(otp) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(otp)
    };

    return fetch(`/otp/authenticate`, requestOptions)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

