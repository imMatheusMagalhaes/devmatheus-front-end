import { createSlice } from "@reduxjs/toolkit";

const posts = createSlice({
  name: "posts",
  initialState: [
    {
      idPost: "",
      titulo: "",
      path: "",
      dataCriacao: "",
    },
  ],
  reducers: {
    setPosts(state, { payload }) {
      state.push(payload);
    },
  },
});

export const { setPosts } = posts.actions;
export default posts.reducer;
