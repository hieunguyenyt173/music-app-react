import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./features/playerSlice";
import { musicAppApi } from "./services/musicApp";
export const store = configureStore({
  reducer: {
    [musicAppApi.reducerPath]: musicAppApi.reducer,
    player: playerReducer,
  },
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(musicAppApi.middleware)
});
