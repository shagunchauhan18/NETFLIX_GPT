import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMoviesugg = () => {
  const gpt=useSelector((store)=>store.gpt);
  const {MovieNames,MovieResults}=gpt;
  if(!MovieNames) return null;
  
  return (
    <div className=
    "m-4 p-4 bg-black border border-black shadow-2xl text-white bg-opacity-80">
     
      {
        MovieNames.map((movieName,index)=>(
          <MovieList key={movieName} title={movieName} movies={MovieResults[index]}/>
        ))
      }
    
    </div>
  )
}

export default GptMoviesugg
