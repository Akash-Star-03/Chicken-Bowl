import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';
import Nav from 'react-bootstrap/Nav';

const SideNav = ({visible}) => {
  return (
    <div className={`side-nav-bar ${visible ? 'visible': ''}`}> 
    <Nav defaultActiveKey="#section1" className="flex-column">
      <Nav.Link href="#section1">All Menu</Nav.Link>
      <Nav.Link href="#section2">Starters</Nav.Link>
      <Nav.Link href="#section3">Main course</Nav.Link>
    </Nav>
    </div>
  )
}

export default SideNav