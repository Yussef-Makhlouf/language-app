import { configureStore } from "@reduxjs/toolkit";
import language from "./slice/languages"
export default configureStore({
    reducer: {
        language
    },
})