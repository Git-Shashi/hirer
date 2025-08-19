import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

function AppLayout() {
  return (
    <div>
      <div className='grid-background'></div>
     <main className="min-h-screen container px-4 sm:px-6 lg:px-8">
    <Header />
  <Outlet />
</main>
<Footer />
    </div>
  )
}

export default AppLayout