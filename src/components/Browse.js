import Header from "./Header";
import PlayingMovie from "./PlayingMovie";
import ListMovies from "./ListMovies";
import usePlayingMovies from "../customHooks/usePlayingMovies";
import {useSelector} from "react-redux";
import VideoBackground from "./VideoBackground";
import { useEffect } from "react";

const Browse = ()=>{

    usePlayingMovies();

    const movies = useSelector((store)=>
        store.movies?.nowPlayingmovies
    );

    if(!movies)return; //easy-return;

    const mainMovie = movies[0];

    const { original_title, overview, id } = mainMovie;
    
    return(
        <div>
            <Header/>
            <div>
                <PlayingMovie title={original_title} overview={overview} />
                <VideoBackground id={id}/>
            </div>
            <div className=" bg-black text-xl text-white -mt-52 pl-12 relative z-20">
                 <h1 className="">Top Rated</h1>
                 <ListMovies List='top_rated'/>
                 <h1>Now Playing</h1>
                 <ListMovies List='now_playing'/>
                 <h1>Popular</h1>
                 <ListMovies List='popular'/>
                 <h1>Upcoming</h1>
                 <ListMovies List='upcoming'/>

            </div>
        </div>
    );
};

export default Browse;