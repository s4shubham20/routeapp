import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
import Blog from './Components/Blog';
import Blogdetail from './Components/Blogdetail';
import Error404 from './Components/Error404';
import Form from './Components/ControllerComponent/Form';
import Enquiryform from './Components/ControllerComponent/Enquiryform';

const root = ReactDOM.createRoot(document.getElementById('root'));
const route = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'about',
    element:<Aboutus/>
  },
  {
    path:'contact',
    element:<Contactus/>
  },

  {
    path:'blog',
    element:<Blog/>
  },
  {
    path:'blog/:slug',
    element:<Blogdetail/>
  },
  {
    path:'*',
    element:<Error404/>
  },
  {
    path:'form',
    element:<Form/>
  },
  {
    path:'enquiry',
    element:<Enquiryform/>
  }

]);
root.render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
