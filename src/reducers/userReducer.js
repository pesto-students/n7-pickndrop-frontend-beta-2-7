import { userConstants } from '../constants/userConstants';

const initialState = {};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state
    }
}

export function driverAuthentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.DRIVER_LOGIN_SUCCESS:
            return {
                loggedIn: true,
                driver: action.driver
            };
        case userConstants.DRIVER_LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state
    }
}

export function otpAuthentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.OTP_VERIFICATION_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case userConstants.OTP_VERIFICATION_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state
    }
}