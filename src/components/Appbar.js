import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Appbar = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className=" bg-black" id='Appbar'>
      <Container>
        <Navbar.Brand href="#home" className='fw-bold text-white ubuntu-regular'>Chicken Bowl <i class="bi bi-egg-fried "></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='text-center bg-white' />
        <Navbar.Collapse id="responsive-navbar-nav" className='text-center text-white align-item-center justify-content-center'>
          <Nav className="ms-auto text-white text-center align-items-center justify-content-center">
            <Nav.Link href="#Home" className=" text-white  ">Home</Nav.Link>
            <Nav.Link href="#Picker" className=" text-white text-center navv">Popular</Nav.Link>
            <Nav.Link href="#menu" className=" text-white navv">Menu</Nav.Link>
            <Nav.Link href="#About" className=" text-white navv">About</Nav.Link>
            <Nav.Link href="#Contact" className="text-white ">contact</Nav.Link>
          
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </>
  )
}

export default Appbar;