import { useEffect } from "react";
import {API_OPT} from "../utils.js/constants";
import {useDispatch} from "react-redux";
import { setPlayingMovie } from "../utils.js/moviesSlice";

const usePlayingMovies = ()=>{
    const dispatch = useDispatch();
    const nowPlaying=async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPT);
        const json = await data.json();
        dispatch(setPlayingMovie(json.results))
        
    }

    useEffect(()=>{
        nowPlaying();
    },[]);
};

export default usePlayingMovies;


