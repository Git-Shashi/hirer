import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <>
        <nav className="py-4 flex justify-between items-center">
            <Link>
            <img src="hirer.png" className="h-20" />
            </Link>
        </nav>
    </>
  )
}

export default Header
