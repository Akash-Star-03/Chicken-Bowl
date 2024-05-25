import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Appbar from './components/Appbar';
import Main from './components/Main';
import FoodCard from './components/FoodCard';
import Picker from './components/Picker';
import Contact from './components/Contact';
import About from './components/About';
import SideNav1 from './components/SideNav1';
import React, { useState,useEffect, useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';


function App() {
  const [navVisible,setNavVisible]=useState(false);
  const menuRef = useRef(null);
  const nextSecRef= useRef(null);

  useEffect(()=>{
    const observerOptions={
      root:null,
      rootMargin: '0px',
      threshold:0.5,
    };

    const observerCallback=(entries)=>{
      entries.forEach((entry)=>{
        if(entry.target === menuRef.current && entry.isIntersecting){
          setNavVisible(true);
        }else if(entry.target === nextSecRef.current && entry.isIntersecting){
          setNavVisible(false);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback,observerOptions);

    if(menuRef.current) observer.observe(menuRef.current);
    if(nextSecRef.current) observer.observe(nextSecRef.current);

    return () => {
      if(menuRef.current) observer.unobserve(menuRef.current);
      if(nextSecRef.current) observer.unobserve(nextSecRef.current);
    };
  },[]);
  
  return (
    <BrowserRouter>
    <div className="App">
      <SideNav1/>
     <Appbar/>
     <br/>
     <br/>
     <Main/>
     <br/>
     <Picker/>
     <br/>
     <section id="menu" ref={menuRef}>

     <FoodCard/>
     </section>
    
     <br/>
     <section id='next-section' ref={nextSecRef}>
     <About/>
     </section>
     <br/>
     <Contact/>
     <br/>
     <div id="foot"className='text-white bg-black p-3' >
                <p>&copy; Copyright 2024, All Rights Reserved.</p>
            </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
