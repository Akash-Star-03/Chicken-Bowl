import React from 'react'
import { Button, Col, Container, FloatingLabel, Form, InputGroup, Row } from 'react-bootstrap'

const Contact = () => {
  return (
    <section id='Contact' className='bg-white py-3 pb-5'>
<div className='text-center my-2 py-3'>
        <h4 className='display-6 text-danger'>Contact us  <i class="bi bi-chat-dots-fill"></i></h4>
       </div>
    <Container>
        <Row className='justify-content-center'>
            <Col md={6}>
            <Form>
            <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="bi bi-envelope-at"></i></InputGroup.Text>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        
      >
        <Form.Control type="email" placeholder="name@example.com" required/>
      </FloatingLabel>
      </InputGroup>
      
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="bi bi-person-fill"></i></InputGroup.Text>
        <FloatingLabel
        controlId="floatingInput"
        label="Your Name"
        
      >
        <Form.Control type="text" placeholder="Your Name" required maxLength={15} />
      </FloatingLabel>
      </InputGroup>
      <FloatingLabel
        controlId="floatingInput"
        label="Comments"
        
      >
        <Form.Control type="text" placeholder="Comments" required maxLength={25} />
        <div className='text-center mt-3  fw-bold d-grid'>
          <Button variant='outline-dark' type='submit' size='lg'><i class="bi bi-send"></i> Send</Button>
        </div>
      </FloatingLabel>
            </Form>
            </Col>
        </Row>
    </Container>
    </section>
  )
}

export default Contact