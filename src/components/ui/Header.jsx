import React, { useEffect, useState } from 'react'
import {Link, useSearchParams} from 'react-router-dom'
import { Button } from './button'
import { SignedOut, useUser } from '@clerk/clerk-react'
import { SignedIn } from '@clerk/clerk-react'
import { UserButton } from '@clerk/clerk-react'
import { SignInButton } from '@clerk/clerk-react'
import { SignIn } from '@clerk/clerk-react'
import { BriefcaseBusiness, Heart, PenBox } from 'lucide-react'


// some points to notice in this page : 
// 1. url synced with the popup 
// 2. how popup works by making a state using usestate and on changing its value the popup 
// vanishes or remains 
// 3. also see the handle click event.

function Header() {
  const [showSignIn,setshowSignIn]=useState(false);
  const {user}=useUser();
  const handleOverlayClick=(e)=>{
    if(e.target===e.currentTarget)
    {
      setshowSignIn(false);
      setSearch({});
    }
  }
const [search,setSearch]=useSearchParams();
useEffect(()=>{
if(search.get("sign-in"))
  setshowSignIn(true);
},[search])
  
  return (
    <>
        <nav className="py-4 flex justify-between items-center">
            <Link>
            <img src="/logo.png" className="h-20" />
            </Link>
           {/* <Button variant="outline" >login</Button> */}

  <div className='flex gap-8'>         
 <SignedOut>
        <Button variant="outline" onClick={() => setSearch({ "sign-in": "true" })}
>login</Button>
           
      </SignedOut>
      <SignedIn>
        {/* add a condtion here  we will only show this if user is a recruiter. */}
  {user?.unsafeMetadata?.role==="recruiter" && (<Link to="/post-jobs">
  <Button variant="destructive" className="rounded-full">
    <PenBox size={20} className="mr-2"/>

    
      Post a Job</Button>
  </Link> )}
       <UserButton
  appearance={{
    variables: {
      avatarSize: "50px",   // controls avatar size
    },
    elements: {
      avatarBox: "rounded-full border border-gray-300", // extra styling
    },
  }}>
    <UserButton.MenuItems>
      <UserButton.Link  label='My Jobs' labelIcon={<BriefcaseBusiness size={15}/>} href='/jobs'/>
      <UserButton.Link  label='Saved Jobs' labelIcon={<Heart  size={15}/>}  href='/saved-jobs'/>
     
    </UserButton.MenuItems>
  </UserButton>

      </SignedIn>
      </div>     
        </nav>
      {
          showSignIn && <div className='fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)]  z-50' onClick={handleOverlayClick}>
            <SignIn signUpForceRedirectUrl="/onboarding"
            fallbackRedirectUrl="/onboarding"
            />
          </div>
        }
    </>
  )
}


export default Header
