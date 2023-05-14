import { createSlice } from '@reduxjs/toolkit'

export const favoritedItemSlice = createSlice({
  name: 'favoritedItem',
  initialState: {
    favoritedItem: [],
  },
  reducers: {
    addToFavorite: (state, action) => {
      const itemInFavorite = state.favoritedItem.find((item) => item.id === action.payload.id)
      if (itemInFavorite) {
        return
      }
      state.favoritedItem.push({ ...action.payload })
    },
    removeToFavorite: (state, action) => {
      const removeItem = state.favoritedItem.filter((item) => item.id !== action.payload)
      state.favoritedItem = removeItem
    }
  },
})

export const favoriteReducer = favoritedItemSlice.reducer
export const { addToFavorite, removeToFavorite } = favoritedItemSlice.actions
