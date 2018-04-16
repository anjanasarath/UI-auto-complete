import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FooterComponent from './footer';
import HeaderComponent from './header';

export default class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {

  }
}
  render() {
    return(
      <div id="mainContainer" className="mainContainerDiv">
        <MuiThemeProvider>
          <div id="subContainer">
            <HeaderComponent/>
            <FooterComponent/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
