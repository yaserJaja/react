import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("auth/fetchProduct", async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  return data
})

const initialState = {
  loading: false,
  data: [],
  error: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [getData.pending] : (state, action) => {
      state.loading = true
    },
    [getData.fulfilled] : (state, action) => {
      state.loading = false
      state.data = action.payload
    },
    [getData.pending] : (state, action) => {
      state.loading = false
      state.error = 'error'
    },
  }
})

export const {} = authSlice.actions

export default authSlice.reducer

