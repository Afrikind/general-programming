import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import authAPI from "../../../api/auth";
import {CONSTANTS} from "../../../utils/constants";

const initialState = {
    authLoading: false,
    authMessage: null,
    authError: null,
    token: null,
    authData: true
};

const login = createAsyncThunk(
    'auth/login',
    async (
        {values, navigate, resetForm, showMessage, setSubmitting},
        {rejectWithValue}) => {
        try {
            setSubmitting(true);
            const response = await authAPI.login(values);
            navigate(`/auth/otp/${response.data.token}/verify`);
            resetForm();
            showMessage(response.data.message, {variant: 'success'});
            setSubmitting(false);
            return response.data;
        } catch (e) {
            const {message} = e.response.data;
            showMessage(message, {variant: 'error'});
            setSubmitting(false);
            return rejectWithValue(message);
        }
    });


const verifyAccount = createAsyncThunk(
    'auth/verifyAccount',
    async (
        {values, resetForm, setSubmitting, navigate, showMessage, token},
        {rejectWithValue}) => {
        try {
            setSubmitting(true);
            const response = await authAPI.verifyAccount(values, token);
            navigate(`/account/verify/success`);
            resetForm();
            showMessage(response.data.message, {variant: 'success'});
            setSubmitting(false);
            return response.data;
        } catch (e) {
            const {message} = e.response.data;
            showMessage(message, {variant: 'error'});
            setSubmitting(false);
            return rejectWithValue(message);
        }
    });


const getProfile = createAsyncThunk('auth/getProfile',
    async ({token, navigate}, {rejectWithValue}) => {
        try {
            const response = await authAPI.getProfile(token);
            return response.data;
        } catch (e) {
            const {message} = e.response.data;
            if(message === 'jwt expired'){
                navigate('/auth/login');
            }
            return rejectWithValue(message);
        }
    });

const updateProfile = createAsyncThunk('auth/updateProfile',
    async ({token, resetForm, setSubmitting, ...rest}, {rejectWithValue}) => {
        try {
            const response = await authAPI.updateProfile(token, {...rest});
            resetForm();
            setSubmitting(false);
            localStorage.setItem(CONSTANTS.THEBOOKSTORE_AUTH_TOKEN, JSON.stringify(response.data.token));
            localStorage.setItem(CONSTANTS.THEBOOKSTORE_AUTH_DATA, JSON.stringify(response.data.data));
            return {data: response.data.data, token: response.data.token};
        } catch (e) {
            const {message} = e.response.data;
            return rejectWithValue(message);
        }
    })

const verifyOTP = createAsyncThunk('auth/verifyOTP',
    async ({values, token, navigate, resetForm, showMessage}, {rejectWithValue}) => {
        try {
            const response = await authAPI.verifyOTP(values, token);
            localStorage.setItem(CONSTANTS.THEBOOKSTORE_AUTH_TOKEN, JSON.stringify(response.data.token));
            localStorage.setItem(CONSTANTS.THEBOOKSTORE_AUTH_DATA, JSON.stringify(response.data.data));
            navigate(`/`);
            resetForm();
            showMessage(response.data.message, {variant: 'success'});
            return {data: response.data.data, token: response.data.token};
        } catch (e) {
            const {message} = e.response.data;
            showMessage(message, {variant: 'error'});
            return rejectWithValue(message);
        }
    });

const resendOTP = createAsyncThunk('auth/resendOTP',
    async ({
               values,
               navigate,
               resetForm,
               showMessage
           }, {rejectWithValue}) => {
        try {
            const response = await authAPI.resendOTP(values);
            navigate(`/auth/otp/${response.data.token}/verify`);
            resetForm();
            showMessage(response.data.message, {variant: 'success'});
            localStorage.setItem(CONSTANTS.THEBOOKSTORE_AUTH_TOKEN, JSON.stringify(response.data.token));
            localStorage.setItem(CONSTANTS.THEBOOKSTORE_AUTH_DATA, JSON.stringify(response.data.data));
            return {data: response.data.data, token: response.data.token};
        } catch (e) {
            const {message} = e.response.data;
            showMessage(message, {variant: 'error'});
            rejectWithValue(message);
        }
    });


const register = createAsyncThunk(
    'auth/register',
    async (
        {values, navigate, resetForm, showMessage, setSubmitting},
        {rejectWithValue}) => {
        try {
            setSubmitting(true);
            const response = await authAPI.register(values);
            navigate(`/auth/verify/${response.data.token}`);
            resetForm();
            showMessage(response.data.message, {variant: 'success'});
            setSubmitting(false);
            return response.data;
        } catch (e) {
            const {message} = e.response.data;
            showMessage(message, {variant: 'error'});
            setSubmitting(false);
            return rejectWithValue(message);
        }
    });

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.token = null;
            state.authData = null;
            state.authLoading = true;
            state.authError = null;
            state.authMessage = null;
        }).addCase(login.fulfilled, (state, action) => {
            state.token = action.payload.token;
            state.authData = action.payload.data;
            state.authLoading = false;
            state.authError = null;
            state.authMessage = action.payload.authMessage;
        }).addCase(login.rejected, (state, action) => {
            state.token = null;
            state.authData = null;
            state.authLoading = false;
            state.authError = action.payload;
            state.authMessage = action.payload;
        }).addCase(getProfile.pending, (state) => {
            state.authLoading = true;
            state.authError = null;
        }).addCase(getProfile.fulfilled, (state, action) => {
            state.authLoading = false;
            state.authError = null;
            state.authData = action.payload.data;
            state.token = action.payload.token;
            state.authMessage = action.payload.message;
        }).addCase(getProfile.rejected, (state, action) => {
            state.authLoading = false;
            state.authError = action.payload;
            state.authData = null;
            state.token = null;
        }).addCase(verifyOTP.pending, (state) => {
            state.authLoading = true;
            state.authError = null;
        }).addCase(verifyOTP.fulfilled, (state, action) => {
            state.authLoading = false;
            state.authError = null;
            state.authData = action.payload.data;
            state.token = action.payload.token;
            state.authMessage = action.payload.message;
        }).addCase(verifyOTP.rejected, (state, action) => {
            state.authLoading = false;
            state.authError = action.payload;
            state.authData = null;
            state.token = null;
        }).addCase(verifyAccount.pending, (state) => {
            state.authLoading = true;
            state.authError = null;
        }).addCase(verifyAccount.fulfilled, (state, action) => {
            state.authLoading = false;
            state.authError = null;
            state.authMessage = action.payload.message;
        }).addCase(verifyAccount.rejected, (state, action) => {
            state.authLoading = false;
            state.authError = action.payload;
            state.authData = null;
            state.token = null;
        }).addCase(resendOTP.pending, (state) => {
            state.authLoading = true;
            state.authError = null;
        }).addCase(resendOTP.fulfilled, (state, action) => {
            state.authLoading = false;
            state.authError = null;
            state.authData = action.payload.data;
            state.token = action.payload.token;
            state.authMessage = action.payload.message;
        }).addCase(resendOTP.rejected, (state, action) => {
            state.authLoading = false;
            state.authError = action.payload;
            state.authData = null;
            state.token = null;
        }).addCase(updateProfile.pending, (state) => {
            state.token = null;
            state.authData = null;
            state.authLoading = true;
            state.authError = null;
            state.authMessage = null;
        }).addCase(updateProfile.fulfilled, (state, action) => {
            state.token = action.payload.token;
            state.authData = action.payload.data;
            state.authLoading = false;
            state.authError = null;
            state.authMessage = action.payload.authMessage;
        }).addCase(updateProfile.rejected, (state, action) => {
            state.token = null;
            state.authData = null;
            state.authLoading = false;
            state.authError = action.payload;
            state.authMessage = action.payload;
        }).addCase(register.pending, (state) => {
            state.token = null;
            state.authData = null;
            state.authLoading = true;
            state.authError = null;
            state.authMessage = null;
        }).addCase(register.fulfilled, (state, action) => {
            state.token = action.payload.token;
            state.authLoading = false;
            state.authError = null;
            state.authMessage = action.payload.authMessage;
        }).addCase(register.rejected, (state, action) => {
            state.token = null;
            state.authData = null;
            state.authLoading = false;
            state.authError = action.payload;
        })
    }
});

export const AUTH_ACTION_CREATORS = {login, getProfile, verifyOTP, resendOTP, updateProfile, verifyAccount, register};
export const selectAuth = state => state.auth;
export default authSlice.reducer;
