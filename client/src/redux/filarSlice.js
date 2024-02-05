import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productData: [],
  userInfo: null,
};

export const filarSlice = createSlice({
  name: 'filar',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const item = state.productData.find(item => item._id === action.payload._id);
        item ? item.quantity += action.payload.quantity : state.productData.push(action.payload);
    },

    deleteItemFromCart: (state, action) => {
        state.productData = state.productData.filter(
          (item) => item._id !== action.payload._id
        );
    },

    emptyCart: (state) => {
        state.productData = [];
    },

    incrementQuantity: (state, action) => {
        const item = state.productData.find(
          (item) => item._id === action.payload._id
        );
        item ? item.quantity++ : state.productData.push(action.payload);
    },

    decreaseQuantity: (state, action) => {
        const item = state.productData.find(
          (item) => item._id === action.payload._id
        );
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity--);
    },

    addUser: (state, action) => {
        state.userInfo = action.payload;
    },

    removeUser: (state) => {
        state.userInfo = null;
    },

  },
});

// Action creators are generated for each case reducer function
export const { addToCart, 
  deleteItemFromCart, 
  emptyCart, 
  incrementQuantity, 
  decreaseQuantity,
  addUser,
  removeUser } = filarSlice.actions;

export default filarSlice.reducer;

