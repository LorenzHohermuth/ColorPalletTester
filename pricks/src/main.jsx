import React, { Children, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css'
import Page from  './Page.jsx'
import ColorGenerator from '../components/testing/ColorGenerator';
import redirectLoader from './redirectLoader';


const router = createBrowserRouter([
  {
    path: "/",
    loader: redirectLoader
  },
  {
    path: "/:colors",
    element: <Page/>,
  },
  {
    path: "/:colors/generator",
    element: <ColorGenerator/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)
