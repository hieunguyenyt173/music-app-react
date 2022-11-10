import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./features/playerSlice";
import userReducer from "./features/authSlice";
import { userApi } from "./services/userApi";
import { zingApi } from "./services/zingApi";
export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [zingApi.reducerPath]: zingApi.reducer,
    player: playerReducer,
    user : userReducer,
  },
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(zingApi.middleware)
  
});
