import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth} from "../utils/firebase" 
import { useDispatch, useSelector } from "react-redux";
import { LOGO } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/config";


const Header = () => {
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);
  const dispatch=useDispatch();
  const user=useSelector(store=>store.user)
const navigate=useNavigate();


  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate("/")
      
    }).catch((error) => {
      // An error happened.
    });
  }
  
  
  const HandleGptSearch=()=>{
    dispatch(toggleGptSearch())
  
  }
  const HandleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value));
  }

  return (
   
    <div 
    className=" flex justify-between w-screen h-20 bg-gradient-to-b from-black absolute z-10  ">
      <img  alt="logo" className=" w-60 z-10
" src={LOGO}
/>

{
  user&&(<div className="flex p-2">
  {showGptSearch&&( <select 
    className="p-2 m-2 bg-black text-white font-bold border border-yellow-500" 
    onChange={HandleLanguageChange}>
      {
      SUPPORTED_LANGUAGES.map((lang)=>(
        <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
      ))
}
    </select>)
}


    <button onClick={HandleGptSearch}
     className="text-white px-6 m-2 mx-4 py-2 bg-purple-700 rounded-lg ">
      {showGptSearch?"Home Page":"GPT Search"}
      </button>
    
  
  <img className=" h-14 w-10 my-4 py-2" alt="usericon" src={user?.photoURL}
  />
  
  <button 
  className=" pt-1 my-0 mx-0 text-white text-lg  font-bold" 
  onClick={handleSignOut}>(Sign Out)</button>

  <button 
  className="w-6 mx-0 text-white" >
    <img alt="dropdown" 
    src="https://cdn.iconscout.com/icon/premium/png-256-thumb/dropdown-36-666279.png?f=webp
        "/></button>
      

       
  
</div>)
}

       
     
    </div>
  
  )
}

export default Header
