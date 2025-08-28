import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

function Protect_route({children}) {
    const {user,isLoaded,isSignedIn}=useUser();
    // useUser is provided by the clerk , very usefull informatio about the user
    // useLocation is by react-router-dom returns current path in url
   const {pathname}=useLocation();
   if(isLoaded && !isSignedIn && isSignedIn!==undefined)
   {
    return <Navigate to='/?sign-in=true' />
   }
  return children;
    
  
}

export default Protect_route