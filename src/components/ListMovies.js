import { IMG_CDN_URL } from "../utils.js/constants";
import usePopulatemovies from "../customHooks/usePopulatemovies";
import { useRef } from "react";

const ListMovies = ({List})=>{
    
    const movies = usePopulatemovies({List});

    const scrollContainerRef = useRef(null);

    const scrollRight = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({
          left: 450, // Adjust this value as needed for the scroll distance
          behavior: 'smooth'
        });
      }
    };
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollBy({
            left: -450, // Adjust this value as needed for the scroll distance
            behavior: 'smooth'
          });
        }
      };


    return(
        <div className=" relative">
            <div ref={scrollContainerRef} className=" flex  overflow-x-scroll no-scrollbar">
                {
                    movies.map((movie)=>
                        <img key={movie.id}className=" p-3 m-5 w-[450px] h-[250px]" src={IMG_CDN_URL +  movie.poster_path}></img>
                    )
                }
            </div>
            <div className=" bg-transparent hover:">
            <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white px-4 py-2 rounded hover:bg-opacity-80">
            ⬅️
            </button>
            <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded">
            ➡️
            </button>
            </div>
            
        
        </div>
    )
};

export default ListMovies;