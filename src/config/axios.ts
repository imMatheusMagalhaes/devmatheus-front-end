import axios from "axios";

export const API = "http://localhost:4000/api";

export const api = axios.create({
  baseURL: API,
  timeout: 60000,
  //headers: { "X-Custom-Header": "foobar" },
});
