import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./reduce"

 export const store = configureStore({
    reducer:{
        auth: authReducer,
    },
});

