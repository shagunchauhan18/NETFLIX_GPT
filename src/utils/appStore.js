import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";
import config from "./config";

const appStore=configureStore({
    reducer: {
        user:userSlice,
        movies:movieSlice,
        gpt:gptSlice,
        config:config,
    },
})
export default appStore;