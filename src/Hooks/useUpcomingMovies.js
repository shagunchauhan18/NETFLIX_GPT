import { useDispatch } from 'react-redux'
import { addUpcomingMovie, addnowPlayingMovies } from '../utils/movieSlice'
import  { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'


const useUpcomingMovies=()=>{

    const dispatch=useDispatch();

    const getUpcomingMovies=async()=>{
     
  
      const data=await 
      fetch("https://api.themoviedb.org/3/movie/upcoming",API_OPTIONS);
      const json= await data.json();
     
      dispatch(addUpcomingMovie(json.results))

  
    }
    useEffect(()=>{
     getUpcomingMovies();
    },[]);

}
export default useUpcomingMovies;