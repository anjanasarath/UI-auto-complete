import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header';
//import LoginPage from './loginPage';
import BookingFormComponent from './bookingForm';
//import RecentBookingComponent from './recentBooking';

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
            <BookingFormComponent/>
          </div>
        </MuiThemeProvider>
      );
    }
}
