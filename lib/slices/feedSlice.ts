import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Post } from '../mock';

export type FeedState = {
  posts: Post[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string;
  activeFilter: string;
};

const initialState: FeedState = {
  posts: [],
  status: 'idle',
  activeFilter: 'All',
};

export const fetchPosts = createAsyncThunk('feed/fetchPosts', async () => {
  const res = await fetch('/api/posts');
  const data = await res.json();
  return data.posts as Post[];
});

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      state.activeFilter = action.payload;
    },
    addPost(state, action: PayloadAction<Post>) {
      state.posts.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setFilter, addPost } = feedSlice.actions;
export default feedSlice.reducer;