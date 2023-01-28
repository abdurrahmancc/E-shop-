import { configureStore } from '@reduxjs/toolkit'
import wishlistReducer from '../features/wishlist/wishlistSlice'
import cartReducer from '../features/shoppingCart/shoppingCartSlice'
import compareReducer from '../features/compare/compareSlice'

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart: cartReducer,
    compare: compareReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
