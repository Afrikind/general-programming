import axios from "axios";
import {CONSTANTS} from "../utils/constants";


const getLikes = (book) => {
    return axios({
        method: 'GET',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/likes?book=${book}`,
    });
}

const toggleLike = (token, book) => {
    return axios({
        method: 'POST',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/likes`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {book}
    });
}


const getLike = (id) => {
    return axios({
        method: 'GET',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/likes/${id}`,
    });
}


export const LIKE_API = {getLikes, getLike, toggleLike};
