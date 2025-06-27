import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  return await res.json()
})

const productsSlice = createSlice({
  name: 'products',
  initialState: { items: [], status: 'idle' },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchProducts.rejected, state => {
        state.status = 'failed'
      })
  },
})

export default productsSlice.reducer