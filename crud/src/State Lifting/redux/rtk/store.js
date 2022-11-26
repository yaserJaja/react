import { configureStore } from "@reduxjs/toolkit";
import bankSlice from "./slices/bank-slice";
import ProductReducer from './slices/products-slice'

export const store = configureStore({
  reducer: {
    bank: bankSlice,
    products: ProductReducer 
  }
})