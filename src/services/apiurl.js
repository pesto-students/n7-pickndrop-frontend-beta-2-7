export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.API_URL
    : "https://pickndrop-backend.herokuapp.com";
