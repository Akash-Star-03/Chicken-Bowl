import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { FaDrumstickBite, FaHome } from "react-icons/fa";
import { FaBowlRice } from 'react-icons/fa6';
import './SideNav1.css';

const SideNav1 = () => {
  const [visible, setVisible] = useState(true);

  const handleMouseEnter = () => {
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  return (
    <div
      className={`side-nav-container ${visible ? 'visible' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="side-nav">
        <Nav defaultActiveKey="#section1" className="flex-column">
          <Nav.Link href="#Home">
            <FaHome className='nav-icon' title='Home' />
          </Nav.Link>
          <Nav.Link href="#menu">
            <FaDrumstickBite className='nav-icon' title='Starters' />
          </Nav.Link>
          <Nav.Link href="#Foods-Main">
            <FaBowlRice className='nav-icon' title='Main course' />
          </Nav.Link>
        </Nav>
      </div>
    </div>
  );
}

export default SideNav1;
