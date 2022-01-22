import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    idUser: "",
    nome: "",
    email: "",
    info: "",
  },
  reducers: {
    setUser(state, { payload }) {
      state.idUser = payload.idUser;
      state.nome = payload.nome;
      state.email = payload.email;
      state.info = payload.info;
      window.localStorage.setItem("id", payload.idUser);
    },
  },
});

export const { setUser } = user.actions;
export default user.reducer;
