import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Col, Container, Row } from 'react-bootstrap'


const Main = () => {
  return (
   <section id='Home' className='pt-5 pb-3'>
    <Container fluid>
        <Row className='justify-content-center align-items-center'>
            <Col lg={6}>
            <Carousel>
      <Carousel.Item interval={3000}>
        <img className='d-block w-100' src={require('../Assets/chickenrice.jpg')} alt='Fried Rice'/>
        <Carousel.Caption>
          <span className='fw-bold text-black bg-white h3 mb-5 rounded p-1'> Fried Rice </span>
          <br/>
          <p className='d-none d-md-block text-dark fw-bold bg-white mt-2 rounded'>The Fried Rice is south style and yet have flavour of chinese.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className='d-block w-100' src={require('../Assets/TandooriChicken.jpg')} alt='Tandoor chicken'/>
        <Carousel.Caption>
        <span className='fw-bold text-black bg-white h3 mb-5 rounded p-1'> Tandoor Chicken </span>
          <p className='d-none d-md-block  text-dark bg-white mt-2 rounded fw-bold'> The Tandoor Chicken with have some rare sauces.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className='d-block w-100' src={require('../Assets/Tikka_masala.webp')} alt='Chicken Tikka Masala'/>
        <Carousel.Caption>
          <span className='fw-bold text-black bg-white h3 mb-5 rounded p-1'>Parotha with Tikka</span>
          <p className='d-none d-md-block text-dark bg-white mt-2 rounded fw-bold'>
            The Soft parota with chicken Tikka Masla will be served
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </Col>
        </Row>
        <div className='text-center'>
      <h3 className='display-6' mt-3 > Try some Indian Cuisines!</h3>
      <p className='text-muted lead'> Chettinadu , Continental , Malabar spicy All variety of Meat will be serve!.</p>
     </div>
    </Container>
    </section>
  )
}

export default Main