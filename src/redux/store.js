import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./features/playerSlice";
import userReducer from "./features/authSlice";
import { userApi } from "./services/userApi";
import { zingApi } from "./services/zingApi";
export const store = configureStore({
  reducer: {
    [zingApi.reducerPath]: zingApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    player: playerReducer,
    user : userReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }).concat(zingApi.middleware).concat(userApi.middleware),
  
  
});
