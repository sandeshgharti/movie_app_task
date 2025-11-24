import { configureStore } from "@reduxjs/toolkit";
import myFavoritesSlice from "./slices";

const store = configureStore({
  reducer: {
    myFavorites: myFavoritesSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
