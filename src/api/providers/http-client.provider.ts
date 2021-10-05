import axios from "axios";
import { NSE_BASE_URL } from "../../configuration";

const axiosInstance = axios.create({
    baseURL: NSE_BASE_URL,
    headers: {
        'content-type': 'application/json'
    }
});

export { axiosInstance }