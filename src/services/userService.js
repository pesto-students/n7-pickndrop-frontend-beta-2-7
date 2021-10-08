import { BASE_URL } from "./apiurl";

export const userService = {
  login,
  logout,
  driverLogin,
  userOtpVerification,
  driverOtpVerification,
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

  const res = await fetch(
    `${BASE_URL}/users/authenticate`,
    requestOptions
  ).then((user) => {
    return user;
  });
  return await res.json();
}

async function driverLogin(email, phone) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, phone }),
  };

  const res = await fetch(`${BASE_URL}/driver/authenticate`, requestOptions);
  return await res.json();
}

async function userOtpVerification(otp, email, phone) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ otp, email, phone }),
  };

  const res = await fetch(`${BASE_URL}/user/otp/authenticate`, requestOptions);
  const { token, ...rest } = await res.json();
  window.localStorage.setItem("token", token);
  return rest;
}

async function driverOtpVerification(otp, email, phone) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ otp, email, phone }),
  };

  const res = await fetch(
    `${BASE_URL}/driver/otp/authenticate`,
    requestOptions
  );
  const { token, ...rest } = await res.json();
  window.localStorage.setItem("token", token);
  return {
    token,
    ...rest,
  };
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
  drivingLicense,
  avatar,
  userId
) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: window.localStorage.getItem("token"),
    },
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
      avatar,
      userId,
    }),
  };

  const res = await fetch(`${BASE_URL}/driver/register`, requestOptions);
  return await res.json();
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
