import { createSlice } from "@reduxjs/toolkit";

const initialUser = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: initialUser || null,
    isAuthenticated: !!initialUser,
  };
console.log('Initial state:', initialState);

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state, action) => {
            state.isAuthenticated= true;
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
            console.log('User logged in:', action.payload);

        },
        register: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
          },
        logout:(state) => {
            state.isAuthenticated= false,
            state.user= null
        },
    }
});

export const {login , logout , register} = authSlice.actions;

export default authSlice.reducer;
