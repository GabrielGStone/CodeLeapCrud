import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  posts: any;
  activePost: any;
}

const initialState: InitialState = {
  posts: [],
  activePost: 0,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    editPost: (state, action) => {
      const postsIndex = state.posts.findIndex(
        (post: any) => post.id === action.payload.id
      );

      state.posts[postsIndex] = {
        username: action.payload.username,
        id: action.payload.id,
        title: action.payload.title,
        content: action.payload.content,
      };
    },

    setPost: (state, action) => {
      state.posts.push({
        username: action.payload.username,
        id: action.payload.id,
        title: action.payload.title,
        content: action.payload.content,
      });
    },

    deletePost: (state, action) => {
      state.posts = state.posts.filter(
        (post: any) => post.id !== action.payload
      );
    },

    setActivePost: (state, action) => {
      state.activePost = action.payload;
    },
  },
});

export const { actions, reducer } = postSlice;
