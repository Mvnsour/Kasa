import React from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Error from '../pages/Error'
import ApartmentPage from '../pages/ApartmentPage'
import Navbar from '../components/Navbar'
import Footer from '../layout/Footer'
import Main from '../layout/Main'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
        {/* le outlet sert à mettre les données qu'on souhaite, il pourra render les routes imbriquées */}
      </Main>
      <Footer />
    </>
  )
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/ApartmentPage',
        element: <ApartmentPage />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/Error',
        element: <Error />,
      },
    ],
  },
])