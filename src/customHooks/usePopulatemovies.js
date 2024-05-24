import { useEffect, useState } from "react";
import { API_OPT,IMG_CDN_URL } from "../utils.js/constants";
import {useDispatch} from  "react-redux";

const usePopulatemovies = ({List})=>{
    const [movies,setMovies] = useState([]);
    
    const populateMovies =async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ List, API_OPT);
        const json = await data.json();
        setMovies(json.results);
    };
    useEffect(()=>{populateMovies();},[]);
    return movies;
};

export default usePopulatemovies;