import axios from "axios";

const BASE_URL = "http://localhost:1400/api";

export const request = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
});
