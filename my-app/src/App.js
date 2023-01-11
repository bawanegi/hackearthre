import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import About from './pages/about';
import Sidebar from './components/sidebar';
const APP=()=>{
  return (
   <BrowserRouter>
   <Sidebar>
    <Routes>
      <Route  exact path="/dashboard" element  ={<Dashboard/>}/>
      <Route exact path="/about" element ={<About/>}/>
    </Routes>
   </Sidebar>
   </BrowserRouter>
  );
};

export default  APP;