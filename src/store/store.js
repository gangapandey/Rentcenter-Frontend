import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../pages/product/productSlice";
import cartSlice from "./cartSlice";
import authReducer from './authSlice'


const store = configureStore({
    reducer : {
        product : productReducer,
        cart : cartSlice,
        auth : authReducer
    }
})

export default store