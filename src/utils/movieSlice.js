import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailer:null,
        PopularMovies:null,
        UpcomingMovie:null,


    },
    reducers:{
        addnowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
            
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload;
            
        },
        addTopRated:(state,action)=>{
            state.TopRated=action.payload;
            
        },
        addUpcomingMovie:(state,action)=>{
            state.UpcomingMovie=action.payload;
            
        },

        addTrailer:(state,action)=>{
            state.trailer=action.payload;

        }
    }
})
export const { addnowPlayingMovies,addTrailer,addPopularMovies,addTopRated,addUpcomingMovie}=movieSlice.actions;
export default movieSlice.reducer;