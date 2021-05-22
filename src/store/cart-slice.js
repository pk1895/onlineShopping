import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalPrice: 0,
        totalQuantity: 0
    },
    reducers: {
        addItem(state, action) {
            const actionItem = action.payload;
            console.log(actionItem);
            const existingItem = state.items.find((el) => el.id === action.payload.id);
            state.totalQuantity++;
            state.totalPrice += actionItem.price;
            if (!existingItem) {
                state.items.push({
                    id: actionItem.id,
                    name: actionItem.name,
                    price: actionItem.price,
                    quantity: 1,
                    totalSum: actionItem.price,
                    path: actionItem.path,
                    imageUrl: actionItem.imageUrl
                });
            } else {
                existingItem.quantity++;
                existingItem.totalSum += actionItem.price;
            }
        },
        removeItem(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((el) => el.id === id);
            state.totalQuantity--;
            state.totalPrice -= existingItem.price;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((el) => el.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalSum -= existingItem.price;
            }
        },
        clearCart(state) {
            state.items = [];
            state.totalPrice = 0;
            state.totalQuantity = 0;
        }
    }
});

export const cartActions = CartSlice.actions;
export default CartSlice;