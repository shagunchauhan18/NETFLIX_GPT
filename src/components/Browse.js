import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import Secondarycontainer from './Secondarycontainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRated from '../Hooks/useTopRated';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
  useUpcomingMovies();
  useTopRated();
usePopularMovies();
useNowPlayingMovies();
  return (
    <div>
      <Header/>
      {
        showGptSearch?
          (<GptSearch/>):(<>
          <MainContainer/>
          <Secondarycontainer/>
          </>)
        
      }
     
      
    </div>
  )
}

export default Browse
