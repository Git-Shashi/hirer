import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from './button'
import { SignedOut } from '@clerk/clerk-react'
import { SignedIn } from '@clerk/clerk-react'
import { UserButton } from '@clerk/clerk-react'
import { SignInButton } from '@clerk/clerk-react'

function Header() {
  return (
    <>
        <nav className="py-4 flex justify-between items-center">
            <Link>
            <img src="/logo.png" className="h-20" />
            </Link>
           <Button variant="outline" >login</Button>
           
  {/* <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
            */}
        </nav>
    </>
  )
}
import { ssrImportMetaKey } from 'vite/module-runner'

export default Header
