import React, { useEffect } from 'react'
import Login from './Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Browse from './Browse';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import {addUsers, removeUser} from "../utils/userSlice"



const Body = () => {
    const dispatch=useDispatch();
    const approuter= createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element: <Browse/>

        }
        

    ])
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
             
              const {uid,email,displayName,photoURL} = user;
              dispatch(addUsers({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
            
            } else {
             dispatch(removeUser());
            }
          });
          //Clean up code and unmounts the component
          return ()=>unsubscribe(); 
          

    },[])
  return (
    <div>
        <RouterProvider router={approuter}/>
    </div>
  )
}

export default Body
