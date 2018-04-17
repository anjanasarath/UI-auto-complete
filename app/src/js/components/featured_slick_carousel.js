import React from "react";
import Slider from "react-slick";
import { baseUrl } from "config";
import Image1 from '../images/grid-list/a_park.jpg';
import Image2 from '../images/grid-list/b_park.jpg';
import Image3 from '../images/grid-list/c_park.jpg';
import Image4 from '../images/grid-list/d_park.jpg';
import Image5 from '../images/grid-list/i_park.jpg';
import Image6 from '../images/grid-list/f_park.jpg';
import Image7 from '../images/grid-list/g_park.jpg';
import Image8 from '../images/grid-list/h_park.jpg';

//@import "~slick-carousel/slick/slick.css";
//@import "~slick-carousel/slick/slick-theme.css";

export default class FeaturedComponent extends React.Component {

  render() {

      const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };

    const stylwer = {
      width: '80%',
      height: '100%',
      marginLeft: '100px',
    }

    return (
      <div style={stylwer}>
        <h3> Featured </h3>
        <Slider {...settings}>
          <div>
            <img src={Image1} />
          </div>
            <div>
            <img src={Image2} />
          </div>
          <div>
            <img src={Image3} />
          </div>
          <div>
            <img src={Image4} />
          </div>
          <div>
            <img src={Image5} />
          </div>
          <div>
            <img src={Image6} />
          </div>
          <div>
            <img src={Image7} />
          </div>
          <div>
            <img src={Image8} />
          </div>
        </Slider>
      </div>
    );
  }
}
