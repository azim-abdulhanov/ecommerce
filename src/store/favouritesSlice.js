import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
      const exists = state.find(item => item.id === action.payload.id)
      if (!exists) {
        state.push(action.payload)
      }
    },
    removeFromFavourites: (state, action) => {
      return state.filter(item => item.id !== action.payload)
    },
  },
})

export const { addToFavourites, removeFromFavourites } = favouritesSlice.actions
export default favouritesSlice.reducer
