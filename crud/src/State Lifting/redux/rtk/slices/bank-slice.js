import { createSlice } from "@reduxjs/toolkit";

export const bankSlice = createSlice({
  initialState: 1000,
  name: 'bankSlice',
  reducers: {
    withdraw: (state, action) => {
      return state - action.payload
    },
    disposit: (state, action) => {
      return state + action.payload  
    }
  }
})

export const {withdraw, disposit} = bankSlice.actions
export default bankSlice.reducer