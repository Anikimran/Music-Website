import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Login from './auth/Login'
import About from './pages/About'
import Registration from './auth/Registration'
import ForgetPassword from './auth/ForgetPassword.jsx'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'blogs',
        element: <Blogs />
      },
      {
        path: 'contact',
          loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Contact />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'login/',
        element: <Login />
      },
      {
        path:'registration',
        element:<Registration/>
      },
      {
        path:'forget',
        element:<ForgetPassword/>
      }
    ],
  },
])

export default Router