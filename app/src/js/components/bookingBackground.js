import React from "react";
import Slider from "react-slick";
import { baseUrl } from "config";
import Image1 from '../images/nature/B_parking01.jpg';
import Image2 from '../images/nature/B_parking02.jpg';
import Image3 from '../images/nature/B_parking03.jpg';
import Image4 from '../images/nature/B_parking04.jpg';
import Image5 from '../images/nature/B_parking05.jpg';

//@import "~slick-carousel/slick/slick.css";
//@import "~slick-carousel/slick/slick-theme.css";

export default class BackgroundComponent extends React.Component {

  render() {

      const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const stylwer = {
      width: '100%',
      height: '100%',
      marginLeft: '100px',
    }

    return (
      <div >

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
        </Slider>
      </div>
    );
  }
}
