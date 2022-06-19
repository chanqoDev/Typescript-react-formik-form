import React, { Component } from "react";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import meee from "./assets/meeee.png"; 



export default class Responsive extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
    };
      return (
       <Container maxWidth="xl">
      <div>
        <h2> Technology Stacks </h2>
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
            return (
              <div key={index}>
                {/* <h3>{item}</h3> */}
                 <CardMedia component="img" className="center" sx={{ width: 175 }} image={meee} alt="random" />
              </div>
            );
          })}
        </Slider>
            </div>
            </Container> 
    );
  }
}