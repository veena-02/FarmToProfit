import React from 'react';
import { Carousel, CarouselItem} from 'react-bootstrap';
import {CarouselCaption} from 'reactstrap';
import img1 from './../../Assets/images/equipListCarousel1.png';
import img4 from './../../Assets/images/equipListCarousel4.png';
import img3 from './../../Assets/images/equipListCarousel3.png';
import './EquipmentList.css';

const EquipListCarousel = () =>{
    return(
    <>
    <Carousel fade>
  <CarouselItem interval={1000}>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption className="font_color">
    <h3>Cheaper Payments</h3>
    <p><h4>Compared to a standard loan or huge principal that is involved in buying the product, renting the equipment is much cheaper, which makes it easy for small and local farmers to afford.</h4></p>
    </Carousel.Caption>
  </CarouselItem>
  <CarouselItem interval={500} >
      <div className="">
    <img
      className="d-block w-100"
      src={img4}
      alt="Second slide"
    /></div>
    <Carousel.Caption className="font_color">
      <h3>Try before Purchasing</h3>
      <p><h4>Renting allows farmers to try out the equipment and decide before making an outright purchase</h4></p>
    </Carousel.Caption>
  </CarouselItem>
  <CarouselItem>
    <img
      className="d-block w-100 "
      src={img3}
      alt="Third slide"
    />
    <Carousel.Caption className="font_color">
      <h3>Keep up with the latest tools</h3>
      <p><h4>Rental equipment is typically used for shorter amounts of time, which allows the farmers to choose the attest technology for their purposes.</h4></p>
    </Carousel.Caption>
  </CarouselItem>
</Carousel>
    </>
    );
}

export default EquipListCarousel;

