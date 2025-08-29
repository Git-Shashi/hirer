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

   // Here you need to check onboarding status.
   if(user!==undefined && !user?.unsafeMetadata?.role && pathname!="/onboarding")
   {

   return  <Navigate to='/onboarding' />
   }
  return children;
    
  
}

export default Protect_route