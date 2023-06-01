import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function ProtectedRoutes({ Home }) {

  const { isLoggedIn } = useSelector((state)=>state.login);

  const Navigate = useNavigate();

  useEffect(()=>{
    if(!isLoggedIn){
      Navigate("/login")
    }
  },[])

  /* if(isLoggedIn){
    return Home;    
  } */

  return Home;
  
}

export default ProtectedRoutes;