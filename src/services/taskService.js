import { BASE_URL } from "./apiurl";
export const createTask = async (body) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };

  const res = await fetch(`${BASE_URL}/tasks/create`, requestOptions);
  return await res.json();
};
export const getTasks = async (driverId) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: window.localStorage.getItem("token"),
    },
  };

  const res = await fetch(
    `${BASE_URL}/tasks/${driverId || ""}`,
    requestOptions
  );
  return await res.json();
};
export const paymentTask = async (id, paymentMethod) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      paymentMethod,
    }),
  };

  const res = await fetch(`${BASE_URL}/tasks/payment/${id}`, requestOptions);
  return await res.json();
};
