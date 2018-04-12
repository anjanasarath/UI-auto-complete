import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import SocialLoginButton from './multipleLogin';
import Styles from './styles/styles_login';

const handleSocialLogin = (user) => {
  console.log(user)
}

const handleSocialLoginFailure = (err) => {
  console.error(err)
}

export default class LoginPage extends React.Component {
  constructor(props){
  super(props);
  this.state = {};
  //this.handleSocialLogin = this.handleSocialLogin.bind(this);
  //this.handleSocialLoginFailure =  this.handleSocialLoginFailure.bind(this);
}
  render() {
    return(
      <div id="socialLoginOuterDiv" className="socialLoginOuter">
        <MuiThemeProvider>
          <Paper zDepth={3} style={Styles.paperStyle}>
          <div id="SocialLoginInnerDiv" className="socialLoginInner">
            <div id="fbbtnDiv" className="">
            <SocialLoginButton
            style={Styles.fbButtonStyle}
             provider='facebook'
             appId='YOUR_APP_ID'
             onLoginSuccess={handleSocialLogin}
             onLoginFailure={handleSocialLoginFailure}
            >
              Login with Facebook
            </SocialLoginButton>
            </div>
            <div id="twtrbtnDiv">
            <SocialLoginButton
            style={Styles.twtrButtonStyle}
             provider='twitter'
             appId='YOUR_APP_ID'
             onLoginSuccess={handleSocialLogin}
             onLoginFailure={handleSocialLoginFailure}
           >
              Login with Twitter
            </SocialLoginButton>
            </div>
            <div id="gglebtnDiv">
            <SocialLoginButton
            style={Styles.gglButtonStyle}
             provider='google'
             appId='YOUR_APP_ID'
             onLoginSuccess={handleSocialLogin}
             onLoginFailure={handleSocialLoginFailure}
           >
              Login with Google
            </SocialLoginButton>
            </div>
            <div>
            <Divider style={Styles.ddrStyle} inset={true}/>
            </div>
            <p>or</p>
            <div>
              <Divider style={Styles.ddrStyle} inset={true}/>
            </div>
            <Subheader>Email Address or phone number</Subheader>
            <TextField></TextField>
            <Subheader>Password</Subheader>
            <TextField></TextField>
          </div>
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}
