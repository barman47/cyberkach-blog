import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { handleError } from '@/utils/handleError';
import { ApiErrorResponse, ApiResponse, Error } from '@/utils/constants';
import { Post } from '@/interfaces';
import { RootState } from '../store';

export type PostError = Error & Post;

const URL = `${process.env.NEXT_PUBLIC_SERVER_URL}/posts`;

export type Pagination = {
    next?: {
        page: number;
        limit: number;
    }
}

interface AuthState {
    isLoading: boolean;
    isSearchResult: boolean;
    post: Post;
    posts: Post[];
    pagination: Pagination;
    msg: string | null;
    error: PostError;
};

const initialState: AuthState = {
    isLoading: false,
    isSearchResult: false,
    post: {} as Post,
    posts: [],
    pagination: {},
    msg: null,
    error: {} as PostError
};

export const getPost = createAsyncThunk<ApiResponse, string, { rejectValue: ApiErrorResponse }>('posts/getPost', async (postId, { rejectWithValue }) => {
    try {
        const res = await axios.get<ApiResponse>(`${URL}/${postId}`);
        return res.data;
    } catch (err) {
        return handleError(err, rejectWithValue, 'Failed to get post');
    }
});

export const getPosts = createAsyncThunk<ApiResponse, { page: number, limit: number }, { rejectValue: ApiErrorResponse }>('posts/getPosts', async ({ page, limit }, { rejectWithValue }) => {
    try {
        const res = await axios.get<ApiResponse>(`${URL}?page=${page}&limit=${limit}`);
        return res.data;
    } catch (err) {
        return handleError(err, rejectWithValue, 'Failed to get posts');
    }
});

export const getMorePosts = createAsyncThunk<ApiResponse, { page: number, limit: number }, { rejectValue: ApiErrorResponse }>('posts/getMorePosts', async ({ page, limit }, { rejectWithValue }) => {
    try {
        const res = await axios.get<ApiResponse>(`${URL}?page=${page}&limit=${limit}`);
        return res.data;
    } catch (err) {
        return handleError(err, rejectWithValue, 'Failed to get posts');
    }
});

export const searchPosts = createAsyncThunk<ApiResponse, string, { rejectValue: ApiErrorResponse }>('posts/searchPosts', async (searchQuery, { rejectWithValue }) => {
    try {
        const res = await axios.get<ApiResponse>(`${URL}/search?text=${searchQuery}`);
        return res.data;
    } catch (err) {
        return handleError(err, rejectWithValue, 'Failed to search for posts');
    }
});


export const posts = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPost: (state, action: PayloadAction<Post>) => {
            state.post = action.payload;
        },

        setPostMessage: (state, action: PayloadAction<string | null>) => {
            state.msg = action.payload;
        },

        setPosts: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload;
        },

        setPagination: (state, action: PayloadAction<Pagination>) => {
            state.pagination = action.payload;
        },

        clearError: (state) => {
            state.error = {} as PostError;
        },
    },
    extraReducers(builder) {
        builder
        .addCase(getPost.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getPost.fulfilled, (state, action) => {
            state.isLoading = false;
            state.post = action.payload.data;
        })
        .addCase(getPost.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload?.data;
        })

        .addCase(getPosts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            if (state.isSearchResult) {
                state.isSearchResult = false;
            }
            state.isSearchResult
            state.posts = [...action.payload.data];
            state.pagination = action.payload.pagination || { };
        })
        .addCase(getPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload?.data;
        })

        .addCase(getMorePosts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getMorePosts.fulfilled, (state, action) => {
            state.isLoading = false;
            if (state.isSearchResult) {
                state.isSearchResult = false;
            }
            state.posts = [...state.posts, ...action.payload.data];
            state.pagination = action.payload.pagination || { };
        })
        .addCase(getMorePosts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload?.data;
        })

        .addCase(searchPosts.pending, (state) => {
            // state.isLoading = true;
            state.isSearchResult = true;
            state.pagination = {} as Pagination;
        })
        .addCase(searchPosts.fulfilled, (state, action) => {
            // state.isLoading = false;
            state.posts = [...action.payload.data];
            state.isSearchResult = action.payload.data.length !== 0
        })
        .addCase(searchPosts.rejected, (state, action) => {
            // state.isLoading = false;
            state.isSearchResult = false;
            state.error = action.payload?.data;
        })
    }
});

export const {
    clearError,
    setPost,
    setPosts,
    setPostMessage,
    setPagination
} = posts.actions;

export const selectPostErrors = (state: RootState) => state.posts.error;
export const selectIsPostLoading = (state: RootState) => state.posts.isLoading;
export const selectIsSearchResult = (state: RootState) => state.posts.isSearchResult;
export const selectPostMessage = (state: RootState) => state.posts.msg;
export const selectPost = (state: RootState) => state.posts.post;
export const selectPosts = (state: RootState) => state.posts.posts;
export const selectPagination = (state: RootState) => state.posts.pagination;

export default posts.reducer;