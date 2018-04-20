import React from "react";
import Slider from "react-slick";
import { baseUrl } from "config";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Image1 from '../images/nature/B_parking01.jpg';
import Image2 from '../images/nature/B_parking02.jpg';

//@import "~slick-carousel/slick/slick.css";
//@import "~slick-carousel/slick/slick-theme.css";

export default class BackgroundComponent extends React.Component {

  render() {

      const settings = {
      className: "slider_row",
      adaptiveHeight: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
      const stylex = {
        marginLeft: '100px',
      };
      const mediaStyll = {

      };

    return (
      <div style={stylex}>
        <Slider {...settings}>
            <div>
              <Card expanded={true}>
                <CardHeader
                  title="Hi"
                  subtitle="Welcome"
                />
                <CardMedia
                  overlay={<CardTitle title="image1" subtitle="place1" />}
                  mediaStyle={mediaStyll}
                  >
                  <img src={Image1} alt="recent1" />
                </CardMedia>
              </Card>
            </div>
            <div>
              <Card expanded={true}>
                <div>
                  <CardMedia
                    overlay={<CardTitle title="image2" subtitle="place1" />}
                    mediaStyle={mediaStyll}
                    >
                    <img src={Image2} alt="recent1" />
                  </CardMedia>
                </div>
              </Card>
            </div>
          </Slider>
      </div>
    );
  }
}
