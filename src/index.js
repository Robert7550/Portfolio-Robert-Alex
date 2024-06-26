import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './ScreenComponents/Home'
import About from './About/About';
import Education from './Education/Education';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Project from './Projects/Project';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route path='/' index={true} element={<Home/>} />
      <Route path='/about'  element={<About/>} />
      <Route path='/education'  element={<Education/>} />
      <Route path='/skills' element={<Skills/>} />
      <Route path='/project' element={<Project/>} />
      <Route path='/contact' element={<Contact/>} />


    </Route>
  )
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
