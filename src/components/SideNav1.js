import React, { useState } from 'react';
import {  Container } from 'react-bootstrap';
import './SideNav1.css';
import Nav from 'react-bootstrap/Nav';
import { FaDrumstickBite } from "react-icons/fa";
import { FaBowlRice } from 'react-icons/fa6';
import {LuDessert} from 'react-icons/lu';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} visible={visible} > 
   <Container>
    
       <div className="side-nav">
    <Nav defaultActiveKey="#section1"  className="flex-column" style={{overflow:'hidden'}}>
      <OverlayTrigger placement="right"  overlay={<Tooltip id="tooltip-starter">Starters</Tooltip>} containerPadding={20}>
      <Nav.Link href="#menu" className='nav-link' ><FaDrumstickBite  className='nav-icon text-black'/> </Nav.Link>
      </OverlayTrigger>
      <OverlayTrigger placement="right"  overlay={<Tooltip id="tooltip-main-course">Main Course</Tooltip>} containerPadding={20}>
      <Nav.Link href="#Foods-Main" className='nav-link'> <FaBowlRice  className='nav-icon text-black' /></Nav.Link>
      </OverlayTrigger>
      <OverlayTrigger placement="right"  overlay={<Tooltip id="tooltip-dessert">Desserts</Tooltip>} containerPadding={20}>
      <Nav.Link href="#desert" className='nav-link'> <LuDessert className='nav-icon text-black'/> </Nav.Link>
      </OverlayTrigger>
    </Nav>
    </div>
     
   </Container>
    </div>
    
  )
}

export default SideNav1