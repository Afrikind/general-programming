import axios from "axios";
import {CONSTANTS} from "../utils/constants";

const getBooks = (query) => {
    return axios({
        method: 'GET',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/books?query=${query}`,
    });
}


const createBook = (token, data) => {
    return axios({
        method: 'POST',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/books`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        data
    });
}


const updateBook = (token, id, data) => {
    return axios({
        method: 'PUT',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/books/${id}`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        data
    });
}

const getBook = (id) => {
    return axios({
        method: 'GET',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/books/${id}`,
    });
}


const deleteBook = (token, id) => {
    return axios({
        method: 'DELETE',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/books/${id}`,
        headers: {
            Authorization: `Bearer ${token}`
        },
    });
}



export const BOOK_API = {getBooks, getBook, createBook, deleteBook, updateBook};
