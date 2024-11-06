import axios from "axios";

axios.defaults.baseURL = "https://aperta-api-e412b7c2a211.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

// request & response interceptors
export const axiosReq = axios.create();
export const axiosRes = axios.create();
