import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, redirect, useNavigate } from 'react-router-dom';
import './index.css'
import Page from './Page';
import redirectLoader from './redirectLoader';
import Redirect from './redirectLoader';

const router = createBrowserRouter([
  {
    path: "/",
    loader: redirectLoader
  },
  {
    path: "/:colors",
    element: <Page />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
