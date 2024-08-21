import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name:"auth",
    initialState:{
        user:JSON.parse(sessionStorage.getItem("authUser")) || {
            name: "",
            password: "",
            authUser:"false",
        },
    },
    reducers:{
        login(state,action){
            const userId = action.payload;
            const userValidation = /^madhan$/i.test(userId.name);
            const passwordValidation = /^madhan$/i.test(userId.password);

            state.user = userId;
            if(!userValidation || !passwordValidation){
                state.user.authUser = false;
            }
            else{
                state.user.authUser = true;
                const saveState = JSON.stringify(userId);
                sessionStorage.setItem("authUser", saveState);
            }
        },
        
        logout(state) {
            state.user = {
              name: "",
              password: "",
              authUser: false,
            };
            sessionStorage.clear();
            console.log('hiii  im logout');
          },
        },
});

export const {login, logout} =loginSlice.actions;
export default loginSlice.reducer;

