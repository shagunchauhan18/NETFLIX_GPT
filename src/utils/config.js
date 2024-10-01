import { createSlice } from "@reduxjs/toolkit";

const config=createSlice({
     name:"config",
     initialState:{
        Language:"en"
     },reducers:{
        changeLanguage:(state,action)=>{
            state.Language=action.payload;
        }
     }
})
export const {changeLanguage}=config.actions;
export default config.reducer;