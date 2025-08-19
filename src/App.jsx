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
       ,
       {
        path:'/jobs',
        element:<JobsList />
       }
       ,
       {
        path:'job/:id',
        element:<Job />
       },
       {
        path:'post-jobs',
        element:<Postjobs />

       },
       {
        path:'saved-jobs',
        element:<Savedjobs />
       }
       ,
       {
        path:'my-jobs',
        element:<MyJobs />
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
