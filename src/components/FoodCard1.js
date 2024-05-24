import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import  { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const FoodCard1 = () => {
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
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
  return (
    <section className='bg-light mt-2' id="Foods-Main">
    <Container>
    <div className='text-center mt-5 mb-4'>
        <h3 className='display-5 text-black'>Main Course</h3>
    </div>
    <hr/>
            <Row >
            <Col md={6} lg={4} >
        
    <Card className='m-3 '>
    <Card.Img variant="top" src={require('../Assets/biriyani.webp')} />
    <Card.Body>
      <Card.Title className='text-danger fw-bold'>Chicken Biriyani</Card.Title>
      <Card.Text>
        <h4 className='text-black'> ₹ 399</h4>
     Chicken Dum biriyani made with agmark ghee and cashew at the toppings. well cooked tendery chicken pcs will be served. 
      </Card.Text>
      <Button variant="dark" onClick={() => setModalShow(true)}> Order Now</Button>
    </Card.Body>
  </Card>
  <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </Col>
  
  <Col md={6} lg={4}>
  <Card className='m-3 '>
    <Card.Img variant="top" src={require('../Assets/chickenrice.jpg')} />
    <Card.Body>
      <Card.Title className='text-danger fw-bold'>Chicken Fried Rice</Card.Title>
      <Card.Text>
        <h4 className='text-black'>₹ 250</h4>
      To cater to vegetarians, in some cases, it is prepared by substituting vegetables for the meat. Sometimes eggs and/or potatoes are also added.
      </Card.Text>
      <Button variant="dark" onClick={() => setModalShow(true)}>Order Now</Button>
    </Card.Body>
  </Card>
  <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </Col>
      

       <Col md={6} lg={4} >
  <Card className='m-3 '>
    <Card.Img variant="top" src={require('../Assets/parota.avif')} />
    <Card.Body>
      <Card.Title className='text-danger fw-bold'>Parota with Egg Masala</Card.Title>
      <Card.Text>
        <h4 className='text-black'>₹ 275</h4>
        Egg masala gravy from chettinadu style. It have all spices and traditional way of cooking recipe, Made by chettinadu chefs. One pcs of parotha will be complimentry.
      </Card.Text>
      <Button variant="dark" onClick={() => setModalShow(true)}>Order Now</Button>
    </Card.Body>
  </Card>
  <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </Col>

      <Col md={6} lg={4} >
  <Card className='m-3 '>
    <Card.Img variant="top" src={require('../Assets/Chicken-Hakka-Noodles.jpg')} />
    <Card.Body>
      <Card.Title className='text-danger fw-bold'>Chicken Hakka Noodles</Card.Title>
      <Card.Text>
        <h4 className='text-black'> ₹ 699</h4>
      Chicken Hakka Noodles from chinese style. It have all spices and traditional way of cooking recipe, Made by original chinese chefs. Authenticate hot chilli sauce will be served.
      </Card.Text>
      <Button variant="dark" onClick={() => setModalShow(true)}>Order Now</Button>
    </Card.Body>
  </Card>
  <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </Col>
      <Col md={6} lg={4} >
  <Card className='m-3 '>
    <Card.Img variant="top" src={require('../Assets/bb.jpg')} />
    <Card.Body>
      <Card.Title className='text-danger fw-bold'>Bamboo chicken</Card.Title>
      <Card.Text>
        <h4 className='text-black'> ₹ 560</h4>
      Bamboo chicken biriyani is modern new style of biriyani , cooked by inside the bamboo. It have all flavour of bamboo and chicken in it.
      </Card.Text>
      <Button variant="dark" onClick={() => setModalShow(true)}>Order Now</Button>
    </Card.Body>
  </Card>
  <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </Col>
      <Col md={6} lg={4} >
  <Card className='m-3 mb-5'>
    <Card.Img variant="top" src={require('../Assets/Tikka_masala.webp')} />
    <Card.Body>
      <Card.Title className='text-danger fw-bold'>Tikka Masala with Nan</Card.Title>
      <Card.Text>
        <h4 className='text-black'> ₹ 299</h4>
        Chicken Tikka masala gravy from chettinadu style. It have all spices and traditional way of cooking recipe, Made by chettinadu chefs. One pcs of Butter Nan will be complimentry.
      </Card.Text>
      <Button variant="dark" onClick={() => setModalShow(true)}>Order Now</Button>
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

export default FoodCard1