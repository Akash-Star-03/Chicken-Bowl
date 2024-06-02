import React from 'react'
import { Container } from 'react-bootstrap'
import AboutImg from '../Assets/About.png';


const About = () => {
  return (
    <section id='About' className='bg-white pb-4 pt-4'>
      <Container>
        <div className='pt-5 fw-bold ubuntu-regular text-black'>
        Chicken Bowl <i class="bi bi-egg-fried "></i>
        </div>
        <div>
          <h2 className='text-danger display-5 mb-4'>About Us</h2>
        </div>
        <div className='md:w-50 px-5 py-5'>
        <img src={AboutImg}   alt='About' className='img-fluid  ' style={{maxWidth:'400px'}}/>
        </div>
        {/*  The headings are over , below are content of this page */}
        <div>
          <p className='text-dark lead'>Welcome to <b>Chicken Bowl</b>, your go-to destination for mouthwatering chicken-based dishes! Established in 2020, Chicken Bowl has swiftly become a household name, delivering over 5000 delectable meals per day. Our commitment to quality and culinary excellence sets us apart, offering Indian flavors and tantalizing continental delights.</p>

<p className='text-dark lead'>Each recipe is crafted with precision, using only the freshest ingredients and traditional cooking techniques. Our team of experienced chefs brings passion and creativity to the kitchen, ensuring every bite is a culinary delight.</p>

<p className='text-dark lead'>Whether you're craving classic Indian favorites like Butter Chicken or exploring our innovative continental offerings, Chicken Bowl promises a gastronomic experience like no other.<i> Join us on a journey of flavor and generosity.</i></p>
        </div>
      </Container>
    </section>
  )
}

export default About