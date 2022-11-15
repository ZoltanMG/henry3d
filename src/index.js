import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routes/home';
import Contact from './routes/contact';
import About from './routes/about';
import Services from './routes/Services';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "contacto",
    element: <Contact />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "servicios",
    element: <Services />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);