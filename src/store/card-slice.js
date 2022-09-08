import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
  },
  //   reducers
  reducers: {
    addToCart() {},
    removeFromCart() {},
    setShowCart(state, action) {
      state.showCart = true;
    },
  },
});
