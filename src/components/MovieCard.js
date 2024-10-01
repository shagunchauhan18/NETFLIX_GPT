import React from 'react'
import { CDN_URL_IMG } from '../utils/constants'

const MovieCard = ({posterpath}) => {
  if(!posterpath) return null;
  return (
    <div className=" w-48 pr-5">
      <img  className=" "
      alt="movie"
      src={CDN_URL_IMG+posterpath}/>

     
    </div>
  )
}

export default MovieCard
