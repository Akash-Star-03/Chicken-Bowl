import React from 'react'
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import  { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const FoodCard2 = () => {
    const [modalShow, setModalShow] = useState(false); 

    function MyVerticallyCenteredModal(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            <h4 className='text-success'>Ordered is Placed!</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
            <p>
             Your order is on the way, while food is on delivery we have special offers . please redeem it now.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}> Close </Button>
          </Modal.Footer>
        </Modal>
      );
    }
  return (
   <section id='desert' className='bg-black pt-5 mt-3  '>
      <div className='text-center  mb-5'>
        <h3 className='display-5 text-white'>Desserts!</h3>
        <hr className='text-light'/>
        </div>
   <Container>
   <Row >
            <Col md={6} lg={4} >
        
    <Card className='m-3 '>
    <Card.Img variant="top" src={require('../Assets/hazelnut-panna-cotta.jpg')} />
    <Card.Body>
      <Card.Title className='text-danger fw-bold'>Hazelnut Pudding</Card.Title>
      <Card.Text>
        <h4 className='text-black'> ₹ 249</h4>
        Indulge in the rich and nutty flavors of our Hazelnut Pudding, Made with creamy hazelnut-infused custard,Topped with a sprinkle of toasted hazelnuts for that perfect crunch.
      </Card.Text>
      <Button variant="dark" onClick={() => setModalShow(true)}> Order Now</Button>
    </Card.Body>
  </Card>
  <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </Col>
    
            <Col md={6} lg={4} >
        
    <Card className='m-3 '>
    <Card.Img variant="top" src={require('../Assets/pumpkin-delight.webp')} />
    <Card.Body>
      <Card.Title className='text-danger fw-bold'>Pumpkin Delight</Card.Title>
      <Card.Text>
        <h4 className='text-black'> ₹ 199</h4>
        Our velvety pumpkin mousse, is infused with spices like cinnamon and nutmeg, creating a symphony of flavors. Topped with a dollop of whipped cream and a sprinkle of cinnamon.
      </Card.Text>
      <Button variant="dark" onClick={() => setModalShow(true)}> Order Now</Button>
    </Card.Body>
  </Card>
  <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </Col>
      
            <Col md={6} lg={4} >
        
    <Card className='m-3 '>
    <Card.Img variant="top" src={require('../Assets/cheese cake1.jpg')} />
    <Card.Body>
      <Card.Title className='text-danger fw-bold'> Berry Cheese Cake</Card.Title>
      <Card.Text>
        <h4 className='text-black'> ₹ 499</h4>
       Berry Cheesecake and luscious berries.Its complementing the creamy cheesecake base with a tangy sweetness. Whether you're a fan of raspberries or blueberries, this cheesecake is for you.
      </Card.Text>
      <Button variant="dark" onClick={() => setModalShow(true)}> Order Now</Button>
    </Card.Body>
  </Card>
  <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </Col>
      </Row>
   </Container>
   </section>
  )
}

export default FoodCard2