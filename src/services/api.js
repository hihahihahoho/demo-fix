import axios from "axios";

const BASE_URL = "https://provinces.open-api.vn/api/";
const api = axios.create({
    baseURL:BASE_URL
});

export default api;