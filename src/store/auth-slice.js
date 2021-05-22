import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: 'Auth',
    initialState: {
        userData: {
            userId: '',
            isLoggedIn: false
        }
    },
    reducers: {
        setUserData(state, action) {
            state.userData.userId = action.payload.userId;
            state.userData.isLoggedIn = action.payload.isLoggedIn;
        }
    }
});

export const authActions = AuthSlice.actions;
export default AuthSlice;