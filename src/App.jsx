import { Button } from './components/ui/button'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import LandingPage from './Pages/LandingPage'
import Onboarding from './Pages/Onboarding'
import path from 'path'
import JobsList from './Pages/JobsList'
import Job from './Pages/Job'
import Postjobs from './Pages/Postjobs'
import Savedjobs from './Pages/Savedjobs'
import MyJobs from './Pages/MyJobs'
import { ThemeProvider } from './components/ui/theme-provider'
import Protect_route from './components/Protect_route'

function App() {
  
const Router=createBrowserRouter(
  [
    {element:<AppLayout />,
      children:[
       {
        path:'/',
        element:
          
        <LandingPage />
       
        
       },
       {
        path:'/onboarding',
        element:
          <Protect_route>
               <Onboarding />

        </Protect_route>
        
        
       }
       ,
       {
        path:'/jobs',
        element:(<Protect_route> <JobsList /></Protect_route>)
       
       }
       ,
       {
        path:'job/:id',
        element:(<Protect_route> <Job /></Protect_route>)
       
       },
       {
        path:'post-jobs',
        element:(<Protect_route>  <Postjobs /></Protect_route>)
       

       },
       {
        path:'saved-jobs',
        element:(<Protect_route><Savedjobs /></Protect_route>)
        
       }
       ,
       {
        path:'my-jobs',
        element:<Protect_route><MyJobs /></Protect_route>
       
       }
      ]
      
    }
  ]
)
  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={Router} />
    </ThemeProvider>
    
   
  )
}

export default App
