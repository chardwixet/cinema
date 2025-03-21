import { createSlice } from '@reduxjs/toolkit';

export interface Modal {
  isOpenAuth: boolean;
  isOpenTrailer: boolean;
  isOpenSearch: boolean;
}

const initialState: Modal = {
  isOpenAuth: false,
  isOpenTrailer: false,
  isOpenSearch: false,
};

const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    toogleAuth(state) {
      state.isOpenAuth = !state.isOpenAuth;
    },
    toogleTrailer(state) {
      state.isOpenTrailer = !state.isOpenTrailer;
    },
    toogleSearch(state) {
      state.isOpenSearch = !state.isOpenSearch;
    },
    offSearch(state) {
      state.isOpenSearch = false;
    },
  },
});

export const { toogleAuth, toogleTrailer, toogleSearch, offSearch } = modalSlice.actions;

export default modalSlice.reducer;
