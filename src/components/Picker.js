import React,{useState} from 'react'
import { Button, Col } from 'react-bootstrap'
import { Container, Row ,Image} from 'react-bootstrap'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import CommentSec from './CommentSec';



//Below is the comments for the auto slide function
const comments=[
  "Ahh! Its !00% worth good meal after a long time, their also give some complimentry dish for it. you should try to guys!. they offer a well braised eggs also don't miss it...","  They give about three types of meat, All are cooked and seasoned well. But their roasted beef platter is amazingly delicious and the cheese mayo is still in my tongue!","It is good, but not good for me. I mean its over Hyped! for me. I like their sauces, but i My fav  meat platter is the  chicken, other are also good but this is my fav!. ", " I mean its alright ,the pros are the amount of meat really plenty. Even my family can't eat it all. the cons are they should improve thier masala's its too spicy ohh! ", "It's  good and tasty and so, deliciously cooked, otherwise their sauce are so worth for money, especially the smoked chilli sauce with roasted beef is god level, Yumm :)"
];

const Picker = () => {
    const [show,setShow] = useState(false);
    
  return (
    <section id="Picker" className='my-3 pb-5 pt-5 mb-5 bg-black'> 
       <div className='text-center my-2 py-3'>
        <h2 className='display-5 text-danger'><i class="bi bi-house-heart-fill"></i> Favoutite seller of Week!</h2>
       </div>
       <Container className='text-white'>
        <Row className='align-items-center my-3 '>
            <Col md={7} >
          <Image src={require('../Assets/platter.webp')} fluid alt='Bamboo-Biriyani' className='mb-5' rounded></Image>
            </Col>
            <Col md={5} className='pb-5 mb-5'>
                <div className='py-3'>
                    <h2 className='text-center h1' > Jumbo Meat Platter  </h2>
                    <p className='lead text-white'>You can have a traditional tray with Chicken, roast beef and Lamb. Add some American cheese, cheddar and Swiss. Include lettuce, sliced tomatoes, pickles and onions. Some mayonnaise and a couple different mustards should be fine. Just <span className='text-danger'> ₹ 999 only/-</span></p>
                    <Button variant='danger' onClick={()=>setShow(true)}> <i class="bi bi-cart4"> </i> Buy now</Button>
                </div>
            </Col>
           
            
        </Row>
          {/* Below is the Toast for the buy btn in popular page */}
        <ToastContainer
          className="p-3 position-fixed top-0 end-0 mt-5"
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
        {/* Below is the auto slider function */}
        <Row className='justify-content-center align-items-center'>
          <Col className='col-md-8 col-lg-7'>
          <div className='text-center pb-3 pt-3'>
              <CommentSec  comments={comments}/>
            </div>
          </Col>
        </Row>
       </Container>
    </section>
  )
}

export default Picker