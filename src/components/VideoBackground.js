import useMovieTrailer from '../Hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId}) => {
   
    const movietrailer=useSelector((store)=>store.movies?.trailer)
  
useMovieTrailer(movieId);
  return (
    <div className="w-screen">
     <iframe 
    className="w-screen  aspect-video" 
      src={"https://www.youtube.com/embed/"+movietrailer?.key+"?&autoplay=1&mute=1 "}
      
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      >

      </iframe>
    </div>
  )
}

export default VideoBackground
