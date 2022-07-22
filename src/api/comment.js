import axios from "axios";
import {CONSTANTS} from "../utils/constants";


const getComments = (book) => {
    return axios({
        method: 'GET',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/comments?book=${book}`,
    });
}

const createComment = (token, data) => {
    return axios({
        method: 'POST',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/comments`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        data
    });
}


const updateComment = (token, id, data) => {
    return axios({
        method: 'PUT',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/comments/${id}`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        data
    });
}

const getComment = (id) => {
    return axios({
        method: 'GET',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/comments/${id}`,
    });
}


const deleteComment = (token, id) => {
    return axios({
        method: 'DELETE',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/comments/${id}`,
        headers: {
            Authorization: `Bearer ${token}`
        },
    });
}


export const COMMENT_API = {getComments, getComment, createComment, deleteComment, updateComment};
