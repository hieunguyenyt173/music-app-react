import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./features/playerSlice";
import { zingApi } from "./services/zingApi";
export const store = configureStore({
  reducer: {
    [zingApi.reducerPath]: zingApi.reducer,
    player: playerReducer,
  },
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(zingApi.middleware)
});
