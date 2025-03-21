import { createSlice } from '@reduxjs/toolkit';
import { User } from '@/api/User';
import { toUpperFirst } from '@/helpers/textUtils';

const initialState: User = {
  email: '',
  name: '',
  surname: '',
  favorites: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.name = toUpperFirst(action.payload.name);
      state.surname = toUpperFirst(action.payload.surname);
      state.favorites = action.payload.favorites;
    },
    removeUser(state) {
      state.email = '';
      state.name = '';
      state.surname = '';
      state.favorites = [];
    },
    addFavoriteAction(state, action) {
      state.favorites.push(action.payload.toString());
    },
    deleteFavoriteAction(state, action) {
      state.favorites = state.favorites.filter((item) => item !== action.payload.toString());
    },
  },
});

export const { setUser, removeUser, addFavoriteAction, deleteFavoriteAction } = userSlice.actions;

export default userSlice.reducer;
