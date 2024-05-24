import React,{useState} from 'react'
import { Button, Col } from 'react-bootstrap'
import { Container, Row ,Image} from 'react-bootstrap'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import CommentSec from './CommentSec';



const comments=[
  "anurath@477: Ahh! Its !00% worth good meal after a long time, their also give some complimentry dish for it. you should try to ..."," manni@0077: They give about three types of meats, All are cooked well and seasoned well. But their roasted beef platter is amazingly delicious and their cheese mayo is still in my tongue!","vasanthi_raj@2003:It is good, but not good for me. I mean its over Hyped! for me. I like their sauces, but i don't like it the meats except chicken. it was a decently cooked, otherwise it not worth for money :(", "sam-and@23: I mean its alright ,the pros are the amount of meat really plenty. Even my family can't eat it all. the cons are they should improve thier masala's its too spicy ohh! ", "avacado@77:it's  good and tasty ('-')"
];

const Picker = () => {
    const [show,setShow] = useState(false);
    
  return (
    <section id="Picker" className='my-3 pb-5 pt-5 bg-black'> 
       <div className='text-center my-2 py-3'>
        <h2 className='display-5 text-danger'><i class="bi bi-house-heart-fill"></i> Favoutite seller of Week!</h2>
       </div>
       <Container className='text-white'>
        <Row className='align-items-center my-3 '>
            <Col md={7} >
          <Image src={require('../Assets/platter.webp')} fluid alt='Bamboo-Biriyani' className='mb-5' rounded></Image>
            </Col>
            <Col md={5}>
                <div className='py-3'>
                    <h2 className='text-center h1' > Jumbo Meat Platter  </h2>
                    <p className='lead text-white'>You can have a traditional tray with Chicken, roast beef and Lamb. Add some American cheese, cheddar and Swiss. Include lettuce, sliced tomatoes, pickles and onions. Some mayonnaise and a couple different mustards should be fine. Just <span className='text-danger'> ₹ 999 only/-</span></p>
                    <Button variant='danger'onClick={()=>setShow(true)}> <i class="bi bi-cart4"></i> Buy now</Button>
                </div>
            </Col>
           
            
        </Row>
            
        <ToastContainer
          className="p-3 position-fixed top-0 end-0"
          position={'top-middle'}
          style={{ zIndex: 1 }}
        >
          <Toast onClose={()=>setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Meat Platter added</strong>
              <small>Just now</small>
            </Toast.Header>
            <Toast.Body className='text-black'>Your order has been placed!.</Toast.Body>
          </Toast>
        </ToastContainer>
       </Container>
       <Container>
        <Row className='justify-content-center align-items-center'>
          <Col className='col-md-8 col-lg-6'>
          <div className='text-center'>
              <CommentSec  comments={comments}/>
            </div>
          </Col>
        </Row>
       </Container>
    </section>
  )
}

export default Picker