import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import TextField from 'material-ui/TextField';
//import RaisedButton from 'material-ui/RaisedButton';
import SocialLoginButton from './multipleLogin';

const handleSocialLogin = (user) => {
  console.log(user)
}

const handleSocialLoginFailure = (err) => {
  console.error(err)
}

const socStyle = {
  width: '100%',
  height: '100%',
  background: '#FFFFF',
  paddingTop: '5%',
  paddingBottom:'5%',
  borderRadius:'2em',
}

export default class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {};
  //this.handleSocialLogin = this.handleSocialLogin.bind(this);
  //this.handleSocialLoginFailure =  this.handleSocialLoginFailure.bind(this);
}
  render() {
    return(
      <div id="" >
        <MuiThemeProvider>
          <div id="" className="SocialLogin">
            <SocialLoginButton
              style={socStyle}
             provider='facebook'
             appId='YOUR_APP_ID'
             onLoginSuccess={handleSocialLogin}
             onLoginFailure={handleSocialLoginFailure}
           >
              Login with Facebook
            </SocialLoginButton>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
