import React from 'react'
import { Container, Row } from 'react-bootstrap'
import AboutImg from '../Assets/About.png';

const About = () => {
  return (
    <section id='About' className='bg-black pb-4 pt-4'>
      <Container>
        <div className='pt-5 fw-bold ubuntu-regular text-white'>
        Chicken Bowl <i class="bi bi-egg-fried "></i>
        </div>
        <div>
          <h2 className='text-danger display-5 mb-4'>About Us</h2>
        </div>
        <div className='md:w-50 px-5 py-5'>
        <img src={AboutImg}   alt='About' className='img-fluid  ' style={{maxWidth:'400px'}}/>
        </div>
        <div>
          <p className='text-light lead'>Welcome to <b>Chicken Bowl</b>, your go-to destination for mouthwatering chicken-based dishes! Established in 2020, Chicken Bowl has swiftly become a household name, delivering over 5000 delectable meals per day. Our commitment to quality and culinary excellence sets us apart, offering a fusion of authentic Indian flavors and tantalizing continental delights.</p>

<p className='text-light lead'>At Chicken Bowl, we take pride in not just serving delicious meals but also in giving back to the community. Through our NGO services and social initiatives, we strive to make a positive impact on society. From feeding the underprivileged to supporting local charities,<i> we believe in spreading love, one meal at a time.</i></p>

<p className='text-light lead'>Our dedication to quality is evident in every dish we prepare. Each recipe is crafted with precision, using only the freshest ingredients and traditional cooking techniques. Our team of experienced chefs brings passion and creativity to the kitchen, ensuring every bite is a culinary delight.</p>

<p className='text-light lead'>Whether you're craving classic Indian favorites like Butter Chicken or exploring our innovative continental offerings, Chicken Bowl promises a gastronomic experience like no other. Join us on a journey of flavor and generosity, where every order contributes to a better tomorrow.</p>
        </div>
      </Container>
    </section>
  )
}

export default About