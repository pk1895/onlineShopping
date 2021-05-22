import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './auth-slice';
import CartSlice from './cart-slice';
import shopSlice from './shop-slice';

const store = configureStore({
  reducer: { shop: shopSlice.reducer, auth: AuthSlice.reducer, cart: CartSlice.reducer }
});

export default store;