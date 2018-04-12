import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
      <div id="loginPageDiv" className="LoginPage" >
        <MuiThemeProvider>
          <LoginPage/>
        </MuiThemeProvider>
      </div>
    );
  }
}
