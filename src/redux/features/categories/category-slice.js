import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CATEGORY_API} from "../../../api/category";
import {categories} from "./category-data";

const initialState = {
    categories: [...categories],
    categoryError: null,
    categoryLoading: false,
    categoryMessage: null,
}

export const getCategories = createAsyncThunk('categories/getCategories', async ({token, query}) => {
    try {
        return await CATEGORY_API.getCategories();
    }catch (e) {
        const {message} = e.response.data;
        return message;
    }
});


const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        filterCategoriesByCategory: (state, action) => {
            state.filteredCategories = state.categories.filter(category => action.payload.includes(category.category));
        }
    },
    extraReducers: builder => {
        builder.addCase(getCategories.pending, (state) => {
            state.categoryLoading = true;
            state.categoryError = null;
            state.categoryMessage = null;
        }).addCase(getCategories.fulfilled, (state, action) => {
            state.categoryLoading = false;
            state.categoryError = null;
            state.categoryMessage = action.payload.message;
            state.categories = action.payload.data;
        }).addCase(getCategories.rejected, (state, action) => {
            state.categoryLoading = false;
            state.categoryError = action.payload;
            state.categoryMessage = action.payload;
            state.categories = [];
        })
    }
});

export const selectCategory = state => state.categories;

export const CATEGORS_ACTION_CREATORS = {getCategories, ...categorySlice.actions};
export default categorySlice.reducer;