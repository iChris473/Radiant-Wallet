import axios from "axios";

const BASE_URL = "https://radiant-wallet-production.up.railway.app/api";
// const BASE_URL = "http://localhost:1500/api";

export const request = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
});
