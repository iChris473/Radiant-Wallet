import axios from "axios";

const BASE_URL = "https://radiant-wallet-production.up.railway.app/api";

export const request = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
});
