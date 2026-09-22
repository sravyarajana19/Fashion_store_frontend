import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({

  name: "wishlist",

  initialState:
    JSON.parse(
      localStorage.getItem("wishlist")
    ) || [],

  reducers: {

    addWishlist: (state, action) => {

      const exists = state.find(
        product =>
          product.id === action.payload.id
      );

      if (!exists) {

        state.push(action.payload);

        localStorage.setItem(
          "wishlist",
          JSON.stringify(state)
        );

      }

    },

    removeWishlist: (state, action) => {

      const updated =
        state.filter(
          product =>
            product.id !== action.payload
        );

      localStorage.setItem(
        "wishlist",
        JSON.stringify(updated)
      );

      return updated;

    }

  }

});

export const {
  addWishlist,
  removeWishlist
} = wishlistSlice.actions;

export default wishlistSlice.reducer;