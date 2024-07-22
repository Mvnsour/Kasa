import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ApartmentDetails from './components/ApartmentDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>404 not found</h1>,
  },
  {
    path: '/apartments',
    element: <div>Nos appartments</div>,
  },
  {
    path: '/about',
    element: <div>A propos</div>,
  },
  {
    path: 'apartment/:id',
    element: <ApartmentDetails />,
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />{' '}
  </React.StrictMode>
)

