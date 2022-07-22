import axios from "axios";
import {CONSTANTS} from "../utils/constants";


const getCategories = () => {
    return axios({
        method: 'GET',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/categories`,
    });
}


export const CATEGORY_API = {getCategories};