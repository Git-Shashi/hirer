import { Button } from './components/ui/button'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import LandingPage from './Pages/LandingPage'
import Onboarding from './Pages/Onboarding'
import path from 'path'

function App() {
  
const Router=createBrowserRouter(
  [
    {element:<AppLayout />,
      children:[
       {
        path:'/',
        element:<LandingPage />
       },
       {
        path:'/onboarding',
        element:<Onboarding />
       }
      ]
      
    }
  ]
)
  return (
    <RouterProvider router={Router} />
   
  )
}

export default App
