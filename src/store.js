import { configureStore } from "@reduxjs/toolkit";
import expenceReducer from "./components/Slice"
const store = configureStore({
    reducer: {
        expence: expenceReducer,
    }
})

export default store