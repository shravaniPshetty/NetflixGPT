import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPT } from "../utils.js/constants";
import { addTrailer } from "../utils.js/moviesSlice";

const useBodyTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPT
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailer(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useBodyTrailer;