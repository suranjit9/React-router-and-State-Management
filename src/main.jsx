import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";

import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Users from './Components/Users/Users.jsx';
import SingalUsear from './Components/Users/SingalUsear.jsx';
import ErrorPage from './assets/Erro/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/about",
        element: <About></About>
      },
      {
        path:"/users",
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>,
        
      },
      {
        path: "/use/:usearsID",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.usearsID}`),
        element: <SingalUsear></SingalUsear>
      }
    ]
  },
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
