import { createSlice } from '@reduxjs/toolkit';
import ShoppingData from './shoppingData';

// console.log(ShoppingData);

const shopSlice = createSlice({
    name:'shop',
    initialState:{
        data:ShoppingData
    }
});

export default shopSlice;