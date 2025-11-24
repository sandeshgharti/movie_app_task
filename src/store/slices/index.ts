import type { Movie } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const myFavoritesSlice = createSlice({
  name: "myFavorites",
  initialState: {
    favMovies: [] as Movie[],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const exists = state.favMovies.find(
        (movie) => movie.id === action.payload.id
      );
      if (exists) {
        state.favMovies = state.favMovies.filter(
          (movie) => movie.id !== action.payload.id
        );
      } else {
        state.favMovies.push({ ...action.payload, isFavorite: true });
      }
    },
  },
});

export const { toggleFavorite } = myFavoritesSlice.actions;
export default myFavoritesSlice;
