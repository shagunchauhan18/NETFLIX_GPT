import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies);

    if(!movies) return;

    const mainmovie=movies[0];
   
    const {original_title,release_date,id}=mainmovie;
  return (
    <div >
     
      <VideoTitle title={original_title} release_date={release_date}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
