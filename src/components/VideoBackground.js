import useBodyTrailer from "../customHooks/useBodyTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({id})=>{
   
    const trailerVideo = useSelector((store) => store.movies?.movietrailer);

    useBodyTrailer(id); 

    return (
        <div className=" w-screen">
          <iframe
            className="w-screen aspect-video"
            src={
              "https://www.youtube.com/embed/" +
              trailerVideo?.key +
              "?&autoplay=1&mute=1"  //to autoplay and mute the video
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      );
};
export default VideoBackground;