import React, { useEffect, useRef } from 'react'
import language from '../utils/language'
import { useDispatch, useSelector } from 'react-redux'
import openai from "../utils/openai"
import { API_OPTIONS } from '../utils/constants'
import { json } from 'react-router-dom'
import { addGptMovieResult } from '../utils/gptSlice'

const GptBar = () => {
 const dispatch=useDispatch();
  const langKey=useSelector((store)=>store.config.Language)
  const search=useRef(null);
  //search the movie in tmdb api
  const searchMovie=async(movie)=>{
    const data= await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1"
      ,API_OPTIONS);
      const json=await data.json();
      return json.results;


  }

  
  
   const HandleGptSearchClick= async()=>{
    
    //Make an Api Call to get Api to get movies results
    //writing a query
    const gptQuery
    ="Act as a movie recommendation System and suggest some movies for the query"+search.current.value+
    "only give me names of 5 movies , coma seperated like the example given ahead-gadar,Sholay, kedarnath,,don,golmaal"

    const gptResults=await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery}],
      model: 'gpt-3.5-turbo',
    });
   
   
    //"Andaz Apna Apna, Chupke Chupke, Bawarchi, Padosan, Chhoti Si Baat"
    const gptMovies=gptResults.choices?.[0]?.message?.content.split(",");
  
    //['Andaz Apna Apna', ' Chupke Chupke', ' Bawarchi', ' Padosan', ' Chhoti Si Baat']
    //for each movie search for its data
    const promiseArray= gptMovies.map((movie)=>searchMovie(movie));
    //[Promise,Promise,Promise,Promise,Promise]
    const resultTMDB=await Promise.all(promiseArray);
   
dispatch(addGptMovieResult({MovieNames:gptMovies,MovieResults:resultTMDB}));

  }

  return (
    <div className="pt-[10%] flex justify-center">
       <form className=" w-1/2  bg-black grid grid-cols-12" onSubmit={(e)=>{
        e.preventDefault() }}>
        <input 
        ref={search}
        type="text" 
        className="p-4 m-4 col-span-9"
         placeholder={language[langKey].placeholder}/>
        <button  onClick={HandleGptSearchClick}
        className="py-2 m-4 px-4 bg-red-700 text-white rounded-lg col-span-3">
          {language[langKey].search}</button>

      </form>
    </div>
  )
}

export default GptBar
