import React, { useState,useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './SideNav1.css';
import Nav from 'react-bootstrap/Nav';
import { FaDrumstickBite, FaHome } from "react-icons/fa";
import { FaBowlRice } from 'react-icons/fa6';
import {LuDessert} from 'react-icons/lu';

const SideNav1 =() => {
  // const [showNav,setShowNav]=useState(false);
  // useEffect(()=>{
  //   const handleScroll=()=>{
  //     if(window.scrollY > 300){
  //       setShowNav(true);
  //     }else{
  //     setShowNav(false);
  //   };
  // }
  //   window.addEventListener('scroll',handleScroll);
  //   return ()=>{
  //     window.removeEventListener('scroll',handleScroll);
  //   }
  // },[]);
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => {
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  return (
    
   
    <div className="side-nav-container"
      onScroll={handleMouseEnter}
      onMouseLeave={handleMouseLeave}> 
       <div className="side-nav">
    <Nav defaultActiveKey="#section1" className="flex-column">
      
      <Nav.Link href="#menu"><FaDrumstickBite  className='nav-icon text-black' title='Starters'/></Nav.Link>
      <Nav.Link href="#Foods-Main"> <FaBowlRice  className='nav-icon text-black' title='Main course'/></Nav.Link>
      <Nav.Link href="#desert"> <LuDessert className='nav-icon text-black'/> </Nav.Link>
    </Nav>
    </div>
    </div>
  )
}

export default SideNav1