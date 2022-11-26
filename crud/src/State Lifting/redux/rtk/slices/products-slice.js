import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  initialState: [{id: 1, title: 'product-1'}],
  name: 'productsSlice',
  reducers: {
    addProduct: (state, action) => {
      console.log(action);
      state.push(action.payload)
    }
  }
})

export const {addProduct} = productsSlice.actions
export default productsSlice.reducer