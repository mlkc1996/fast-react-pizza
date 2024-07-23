import { createSlice } from "@reduxjs/toolkit";
import { binarySearch } from "../../utilities/helpers";

/**
 * @typedef {Object} CartItem
 * @prop {number} pizzaId
 * @prop {string} name
 * @prop {number} unitPrice
 * @prop {number} quantity
 * @prop {number} totalPrice
 */

/**
 * @type {{
 *  cart:CartItem[]
 *  totalPrice:number
 *   totalQuantity:number
 * }}
 */
const initialState = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const { payload: newItem } = action;
      const index = binarySearch(state.cart, (cartItem) => {
        if (newItem.pizzaId > cartItem?.pizzaId) {
          return 1;
        }

        if (newItem.pizzaId < cartItem?.pizzaId) {
          return -1;
        }

        return 0;
      });
      state.cart.splice(index, 0, newItem);
      newItem.totalPrice = newItem.unitPrice * newItem.quantity;
      state.totalPrice += newItem.totalPrice;
      state.totalQuantity += newItem.quantity;
    },
    removeItem(state, action) {
      const pizzaId = action.payload;
      const index = binarySearch(state.cart, (item) => {
        if (item.pizzaId < pizzaId) {
          return 1;
        }
        if (item.pizzaId > pizzaId) {
          return -1;
        }
        return 0;
      });
      const item = state.cart[index];
      if (item.pizzaId !== pizzaId) {
        return;
      }
      state.cart.splice(index, 1);
      state.totalPrice = Math.max(state.totalPrice - item.totalPrice, 0);
      state.totalQuantity = Math.max(state.totalQuantity - item.quantity, 0);
    },
    increaseItemQuantity(state, action) {
      const pizzaId = action.payload;
      const index = binarySearch(state.cart, (item) => {
        if (item.pizzaId < pizzaId) {
          return 1;
        }
        if (item.pizzaId > pizzaId) {
          return -1;
        }
        return 0;
      });
      const item = state.cart[index];
      if (item.pizzaId !== pizzaId) {
        return;
      }
      item.quantity++;
      item.totalPrice += item.unitPrice;
      state.totalPrice += item.unitPrice;
      state.totalQuantity += item.quantity;
    },
    decreaseItemQuantity(state, action) {
      const pizzaId = action.payload;
      const index = binarySearch(state.cart, (item) => {
        if (item.pizzaId < pizzaId) {
          return 1;
        }
        if (item.pizzaId > pizzaId) {
          return -1;
        }
        return 0;
      });
      const item = state.cart[index];
      if (item.pizzaId !== pizzaId) {
        return;
      }
      item.quantity--;
      item.totalPrice -= item.unitPrice;
      state.totalPrice -= item.unitPrice;
      state.totalQuantity -= item.quantity;
    },
    clearCart(state) {
      state.cart.splice(0, state.cart.length);
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
