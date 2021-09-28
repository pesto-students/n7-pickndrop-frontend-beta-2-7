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
export const getTasks = async () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const res = await fetch(`${BASE_URL}/tasks`, requestOptions);
  return await res.json();
};

