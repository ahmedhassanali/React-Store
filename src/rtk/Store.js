import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./slices/CategorySlice";
import ProductsSlice  from "./slices/ProductsSlice";

export const store = configureStore({
    reducer: {
        products : ProductsSlice,
        categories : CategorySlice
    },
})