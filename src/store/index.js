import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "./videos";
import imageReducer from "./image";
const store = configureStore({
  reducer: {
    videos: videosReducer,
    images: imageReducer,
  },
});
export default store;
