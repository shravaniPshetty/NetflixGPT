import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingmovies:null,
        movietrailer:null
    },
    reducers:{
        setPlayingMovie: (state, action) => {
            state.nowPlayingmovies = action.payload;
        },
        addTrailer: (state,action)=>{
            state.movietrailer = action.payload;
        },
    },
});

export const {setPlayingMovie,addTrailer}=moviesSlice.actions;

export default moviesSlice.reducer;

//import { createSlice } from "@reduxjs/toolkit";

// const moviesSlice = createSlice({
//     name: "movies",
//     initialState: {
//       nowPlayingMovies: null,
//       trailerVideo: null,
//     },
//     reducers: {
//       addNowPlayingMovies: (state, action) => {
//         state.nowPlayingMovies = action.payload;
//       },
//       addTrailerVideo: (state, action) => {
//         state.trailerVideo = action.payload;
//       },
//     },
//   });
  
//   export const { addNowPlayingMovies, addTrailerVideo } = moviesSlice.actions;
  
//   export default moviesSlice.reducer;