import axios from "axios";
import {CONSTANTS} from "../utils/constants";


const login = (user) => {
    return axios({
        method: 'POST',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/auth/login`,
        data: user
    });
}

const register = (user) => {
    return axios({
        method: 'POST',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/auth/register`,
        data: user
    });
}

const getProfile = token => {
    return axios({
        method: 'GET',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/auth/profile`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

const updateProfile = (token, data) => {
    return axios({
        method: 'PUT',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/auth/profile`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        data
    });
}

const verifyOTP = (otp, token) => {
    return axios({
        method: 'POST',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/auth/otp/${token}/verify`,
        data: otp
    });
}

const verifyAccount = (otp, token) => {
    return axios({
        method: 'PUT',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/auth/profile/${token}`,
        data: otp
    });
}

const resendOTP = (user) => {
    return axios({
        method: 'POST',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/auth/otp/resend`,
        data: user
    });
}

const authAPI = {login, getProfile, verifyOTP, resendOTP, updateProfile, register, verifyAccount};
export default authAPI;