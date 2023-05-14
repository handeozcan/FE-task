import { configureStore } from '@reduxjs/toolkit'
import { favoriteReducer, favoritedItemSlice  } from './features/favoriteSlice'

export const store = configureStore({
  reducer: {
    [favoritedItemSlice.name]: favoriteReducer
  },
  devTools: import.meta.env.MODE === 'development',
})
