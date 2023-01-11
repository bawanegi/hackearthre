import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './pages/about';
import Sidebar from './components/sidebar';
const APP=()=>{
  return (
   <BrowserRouter>
   <Sidebar>
    <Routes>
      <Route exact path="/about" element ={<About/>}/>
    </Routes>
   </Sidebar>
   </BrowserRouter>
  );
};

export default  APP;