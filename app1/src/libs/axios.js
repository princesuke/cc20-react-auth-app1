import axios from "axios";

const baseConfig = {
  baseURL: "http://localhost:3000/api",
  timeout: 5000,
};

export const publicApi = axios.create(baseConfig);
