import React, { useState, useRef } from 'react'

import { CheckValidate } from '../utils/CheckValidate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Header1 from './Header1';
import { updateProfile } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUsers } from '../utils/userSlice';
import { AVATAR_USER, BG_URL } from '../utils/constants';


const Login = () => {
  const navigate=useNavigate();

  const dispatch=useDispatch();
  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);

  const [isSignIn,setisSignIn]=useState(true);
  const [errormsg,seterrormsg]=useState(null);

  const HandleButton=()=>{
    const result= CheckValidate(email.current.value,password.current.value);
    seterrormsg(result);
    if(result) return;
    if(!isSignIn){
      //Sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
       
      updateProfile(user, {
        displayName: name.current.value,
         photoURL: AVATAR_USER,

      }).then(() => {
        // Profile updated!
        // ...
        const {uid,email,displayName,photoURL} = auth.currentUser;
       
        dispatch(addUsers({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
       
      
      
        navigate("/browse")
      }).catch((error) => {
        // An error occurred
        // ...
      });
      console.log(user);
     
    
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    
    });
  navigate("/browse");
  
    }else{
      //Sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   
  });
  navigate("/browse")
 
  
    }
  
    
  }

const handleToggle=()=>{
  setisSignIn(!isSignIn);


}



  return (
   
    <div className=" ">
        <div className="absolute ">
            <Header1/>
            <img 
            className=" w-full" 
            alt="log" 
             src
             ={BG_URL}/>
        </div>
        
        <form onSubmit={(e)=>e.preventDefault()} className=" bg-opacity-80 w-3/12 absolute bg-gradient-to-t  p-12 border border-black bg-black mx-auto my-24 left-0 right-0">
          <h1 className="text-white text-2xl font-bold py-4 my-4">{isSignIn? "Sign In":"Sign Up"}</h1>
          
          {!isSignIn&&  <input type="text" placeholder="Full Name" className=
           " text-white bg-opacity-75 border border-white bg-black w-full p-2 m-2 border border-black" />
           }
          
          <input ref={email}
          type="text" placeholder="Email Address" className=" text-white bg-opacity-75 border border-white bg-black w-full p-2 m-2 border border-black"/>
          <input ref={password}
          type="password" placeholder="Password" className=" text-white bg-opacity-75 border border-white bg-black w-full p-2 m-2 border border-black"/>
          <p className="text-red-600">{errormsg}</p>
          <button onClick={HandleButton}  className="
           w-full mx-2  py-2 my-20 border border-black bg-red-700 text-white" >
            {isSignIn? "Sign In":"Sign Up"}</button>
        <p onClick={handleToggle} className=" cursor-pointer text-white">
          {isSignIn? "New to Netflix?Sign Up Now":"Already Registered!! Sign In"}</p>
       
        </form>
        
       
      
    </div>
  )
}

export default Login;
