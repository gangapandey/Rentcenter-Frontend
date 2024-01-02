import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../pages/product/productSlice";
import cartSlice from "./cartSlice";


const store = configureStore({
    reducer : {
        product : productReducer,
        cart : cartSlice,
        
    }
})

export default store