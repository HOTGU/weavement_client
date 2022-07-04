import axios from "axios";
import jwt_decode from "jwt-decode";
import { getCookie, setCookie } from "./utils/cookie";

axios.defaults.baseURL = "http://localhost:5000/api";

const axiosJWT = axios.create({
    withCredentials: true,
});

axiosJWT.interceptors.request.use(
    async (config) => {
        let currentDate = new Date();
        console.log(getCookie("accessToken"));
        const decodedToken = jwt_decode(getCookie("accessToken"));

        if (decodedToken.exp * 1000 < currentDate.getTime()) {
            const res = await refreshApi({ refreshToken: getCookie("refreshToken") });
            console.log(res);
            setCookie("accessToken", res.data.accessToken, {
                path: "/",
                maxAge: 60 * 15,
            });
            setCookie("refreshToken", res.data.refreshToken, {
                path: "/",
                maxAge: 60 * 60 * 24 * 14,
                secure: true,
                httpOnly: false,
            });
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const signinApi = (data) => axios.post(`/user/signin`, data);

export const signupApi = (data) => axios.post(`/user/signup`, data);

export const getApi = () => axiosJWT.get(`/user/get`);

export const refreshApi = (token) => axios.post(`/user/refresh`, token);
