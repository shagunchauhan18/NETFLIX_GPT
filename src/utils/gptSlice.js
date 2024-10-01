import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gptsearch",
    initialState:{
        showGptSearch:false,
        MovieResults:null,
        MovieNames:null


    }
    ,reducers:{
        toggleGptSearch:(state,action)=>{
            state.showGptSearch=!state.showGptSearch;

        },
        addGptMovieResult:(state,action)=>{
            const {MovieNames,MovieResults}=action.payload;

            state.MovieResults=MovieResults;
            state.MovieNames=MovieNames;


        }
    }
})
export const {toggleGptSearch,addGptMovieResult}=gptSlice.actions;
export default gptSlice.reducer;