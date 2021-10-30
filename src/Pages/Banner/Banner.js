import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner/banner1.jpg'
// import banner2 from '../../../images/banner/hospital2.png'
import banner2 from '../../images/banner/banner2.jpg'
import banner3 from '../../images/banner/banner3.jpg'

const Banner = () => {
    return (
        <>
          <Carousel>
  <Carousel.Item>
    <img style={{height:"", width:"100px" }}
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Best Travell Agency</h3>
      <p>We do best services. Travell Your Dreamy Spot</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3>Best Travell Agency</h3>
      <p>We do best services. Travell Your Dreamy Spot</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>Best Travell Agency</h3>
      <p>We do best services. Travell Your Dreamy Spot</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>  
        </>


     
    );
};

export default Banner;