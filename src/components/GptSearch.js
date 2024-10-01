import React from 'react'
import GptBar from './GptBar'
import GptMoviesugg from './GptMoviesugg'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  
  return (
    <div >
      <div className="fixed -z-10 bg-gradient-to-b">
       <img 
            className=" w-full" 
            alt="log" 
             src
            ={BG_URL}/>
</div>
      <GptBar/>
      <GptMoviesugg/>
      

      
    </div>
  )
}

export default GptSearch
