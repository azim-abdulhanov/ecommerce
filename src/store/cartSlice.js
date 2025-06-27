import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existing = state.find(item => item.id === action.payload.id)

      if (!existing) {
        state.push({ ...action.payload, quantity: 1 })
      } else {
        existing.quantity += 1
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload)
    },
    incrementQuantity: (state, action) => {
      const item = state.find(i => i.id === action.payload)

      if (item) {
        item.quantity += 1
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.find(i => i.id === action.payload)
      
      if (item && item.quantity > 1) {
        item.quantity -= 1
      }
    },
  },
})

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions
export default cartSlice.reducer
