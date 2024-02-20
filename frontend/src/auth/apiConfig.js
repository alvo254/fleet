import axios from "axios";

const base =
  process.env.NODE_ENV === "production"
    ? "hosting"
    : "https://quickfleet-api.herokuapp.com";

const api = axios.create({
  baseURL: base,
});

export default api;
