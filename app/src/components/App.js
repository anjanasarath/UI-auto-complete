import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header';
import FeaturedList from './featured_slick_carousel';
import RecentBookedCarouselComponent from './recentlyBookedListCarousel';
import BackgroundComponent from './bookingBackground';
import SearchParking from './searchparking';
import LoginPage from './loginPage';

export default class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {};
  //this.handleSocialLogin = this.handleSocialLogin.bind(this);
  //this.handleSocialLoginFailure =  this.handleSocialLoginFailure.bind(this);
}
  render() {
    return(
        <MuiThemeProvider>
          <div className="main">
            <Header/>
          <LoginPage/>
          </div>
        </MuiThemeProvider>
      );
    }
}
