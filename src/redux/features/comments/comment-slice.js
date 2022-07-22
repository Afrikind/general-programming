import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {COMMENT_API} from "../../../api/comment";

const initialState = {
    comments: [],
    commentError: null,
    commentLoading: false,
    commentMessage: null,
    commentDetail: null,
}

export const getComments = createAsyncThunk('comments/getComments', async ({book}) => {
    try {
        const response = await COMMENT_API.getComments(book);
        return response.data;
    } catch (e) {
        const {message} = e.response.data;
        return message;
    }
});

export const getComment = createAsyncThunk('comments/getComment', async ({id}, {rejectWithValue}) => {
    try {
        const response = await COMMENT_API.getComment(id);
        return response.data;
    } catch (e) {
        const {message} = e.response.data;
        return rejectWithValue(message);
    }
});

export const createComment = createAsyncThunk(
    'comments/createComment',
    async ({
               token, comment, setSubmitting,
               resetForm
           }, {rejectWithValue}) => {
        try {
            setSubmitting(true);
            const response = await COMMENT_API.createComment(token, comment);
            resetForm();
            setSubmitting(false);
            return response.data;
        } catch (e) {
            const {message} = e.response.data;
            return rejectWithValue(message);
        }
    });


export const updateComment = createAsyncThunk('comments/updateComment', async ({token, comment, id}, {rejectWithValue}) => {
    try {
        const response = await COMMENT_API.updateComment(token, id, comment);
        return response.data;
    } catch (e) {
        const {message} = e.response.data;
        return rejectWithValue(message);
    }
});


export const deleteComment = createAsyncThunk('comments/deleteComment', async ({token, id}, {rejectWithValue}) => {
    try {
        const response = await COMMENT_API.deleteComment(token, id);
        return response.data;
    } catch (e) {
        const {message} = e.response.data;
        return rejectWithValue(message);
    }
});

const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getComments.pending, (state) => {
            state.commentLoading = true;
            state.commentError = null;
            state.commentMessage = null;
        }).addCase(getComments.fulfilled, (state, action) => {
            state.commentLoading = false;
            state.commentError = null;
            state.commentMessage = action.payload.message;
            state.comments = action.payload.data;
        }).addCase(getComments.rejected, (state, action) => {
            state.commentLoading = false;
            state.commentError = action.payload;
            state.commentMessage = action.payload;
            state.comments = [];
        }).addCase(getComment.pending, (state) => {
            state.commentLoading = true;
            state.commentError = null;
            state.commentMessage = null;
        }).addCase(getComment.fulfilled, (state, action) => {
            state.commentLoading = false;
            state.commentError = null;
            state.commentMessage = action.payload.message;
            state.commentDetail = action.payload.data;
        }).addCase(getComment.rejected, (state, action) => {
            state.commentLoading = false;
            state.commentError = action.payload;
            state.commentDetail = null;
        }).addCase(deleteComment.pending, (state) => {
            state.commentLoading = true;
            state.commentError = null;
            state.commentMessage = null;
        }).addCase(deleteComment.fulfilled, (state, action) => {
            state.commentLoading = false;
            state.commentError = null;
            state.commentMessage = action.payload.message;
            state.comments = state.comments.filter(comment => comment._id !== action.payload.data._id);
        }).addCase(deleteComment.rejected, (state, action) => {
            state.commentLoading = false;
            state.commentError = action.payload;
        }).addCase(updateComment.pending, (state) => {
            state.commentLoading = true;
            state.commentError = null;
            state.commentMessage = null;
        }).addCase(updateComment.fulfilled, (state, action) => {
            state.commentLoading = false;
            state.commentError = null;
            state.commentMessage = action.payload.message;
            state.comments = state.comments.map(comment => {
                if (comment._id === action.payload.data) return action.payload.data;
                return comment;
            });
        }).addCase(updateComment.rejected, (state, action) => {
            state.commentLoading = false;
            state.commentError = action.payload;
        }).addCase(createComment.pending, (state) => {
            state.commentLoading = true;
            state.commentError = null;
            state.commentMessage = null;
        }).addCase(createComment.fulfilled, (state, action) => {
            state.commentLoading = false;
            state.commentError = null;
            state.commentMessage = action.payload.message;
            state.comments = [action.payload.data, ...state.comments];
        }).addCase(createComment.rejected, (state, action) => {
            state.commentLoading = false;
            state.commentError = action.payload;
        })
    }
});

export const selectComment = state => state.comments;

export const COMMENTS_ACTION_CREATORS = {getComments, getComment, createComment, deleteComment, updateComment, ...commentSlice.actions};
export default commentSlice.reducer;
