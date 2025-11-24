import type { Movie } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const myFavoritesSlice = createSlice({
  name: "myFavorites",
  initialState: {
    favMovies: JSON.parse(localStorage.getItem("favMovies") || "[]") as Movie[],
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
        localStorage.setItem("favMovies", JSON.stringify(state.favMovies));
      } else {
        state.favMovies.push({ ...action.payload, isFavorite: true });
        localStorage.setItem("favMovies", JSON.stringify(state.favMovies));
      }
    },
  },
});

export const { toggleFavorite } = myFavoritesSlice.actions;
export default myFavoritesSlice;
