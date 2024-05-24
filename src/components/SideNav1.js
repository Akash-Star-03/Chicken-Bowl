import React, { useState,useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './SideNav1.css';
import Nav from 'react-bootstrap/Nav';
import { FaDrumstickBite, FaHome } from "react-icons/fa";
import { FaBowlRice } from 'react-icons/fa6';


const SideNav1 = (visible) => {
  // const [showNav,setShowNav]=useState(false);
  // useEffect(()=>{
  //   const handleScroll=()=>{
  //     const scrollY=window.scrollY;
  //     setShowNav(scrollY > 400);
  //   };
  //   window.addEventListener('scroll',handleScroll);
  // },[])
  return (
    <div>
    
    <div className={`side-nav ${visible}? 'visible' : ""`}> 
    <Nav defaultActiveKey="#section1" className="flex-column">
      <Nav.Link href="#Home"> <FaHome className='nav-icon' title='Home'/> </Nav.Link>
      <Nav.Link href="#menu"><FaDrumstickBite  className='nav-icon' title='Starters'/></Nav.Link>
      <Nav.Link href="#Foods-Main"> <FaBowlRice  className='nav-icon' title='Main course'/></Nav.Link>
    </Nav>
    </div>
    </div>
  )
}

export default SideNav1