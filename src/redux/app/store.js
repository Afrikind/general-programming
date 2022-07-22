import {configureStore} from "@reduxjs/toolkit";
import uiReducer from "../features/ui/ui-slice";
import authReducer from "../features/auth/auth-slice";
import bookReducer from "../features/books/book-slice";
import categoryReducer from "../features/categories/category-slice";
import commentReducer from "../features/comments/comment-slice";
import likeReducer from "../features/likes/like-slice";

import {CONSTANTS} from "../../utils/constants";


const themeVariant = localStorage.getItem(CONSTANTS.FOODBOX_THEME_VARIANT) ?
    JSON.parse(localStorage.getItem(CONSTANTS.FOODBOX_THEME_VARIANT)) : 'dark';

const viewMode = localStorage.getItem(CONSTANTS.FOODBOX_VIEW_MODE) ?
    JSON.parse(localStorage.getItem(CONSTANTS.FOODBOX_VIEW_MODE)) : 'grid';

const token = localStorage.getItem(CONSTANTS.FOODBOX_AUTH_TOKEN) ?
    JSON.parse(localStorage.getItem(CONSTANTS.FOODBOX_AUTH_TOKEN)) : null;

const authData = localStorage.getItem(CONSTANTS.FOODBOX_AUTH_DATA) ?
    JSON.parse(localStorage.getItem(CONSTANTS.FOODBOX_AUTH_DATA)) : null;


const store = configureStore({
    reducer: {
        ui: uiReducer,
        auth: authReducer,
        books: bookReducer,
        categories: categoryReducer,
        comments: commentReducer,
        likes: likeReducer
    },
    preloadedState: {
        ui: {themeVariant, activePath: '/', drawerOpen: false, viewMode},
        auth: {
            token,
            authData
        }
    }
});

export default store;
