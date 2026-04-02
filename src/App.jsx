import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Login />
    },
     {
      path: "/register",
      element: <Register />
    },
    {
       path : "/dashboard",
       element : <Dashboard />
    },
  ])
  return (
    <RouterProvider router={router} />
  )
  
}

export default App
