import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import SocialLoginButton from './multipleLogin';
import Styles from './styles/styles_login';
import Logo from '../../logo/or-divider.png';


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
            <div id="modalHeader" className="modalHeaderCss">
              <Subheader>Please log in to your account</Subheader>
              <i id="icon" className="icon-lock"></i>
            </div>
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
            <div id="divider" className="">

            <span><img src={Logo}/></span>

            </div>
            <div id="email" className="row" >
            <Subheader>Email Address or phone number</Subheader>
            <TextField id="t1"></TextField>
            </div>
            <div id = "pswd" className="row">
            <Subheader>Password</Subheader>
            <TextField id="t2"></TextField>
            </div>
            <Subheader>Forgotten your password?</Subheader>
            <Subheader>Don't have an account?Sign up now</Subheader>
            <div id="modalFooter" className="modalFooterCss">
              <button style={Styles.footerbtn}>Log in</button>
            </div>
          </div>
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}
