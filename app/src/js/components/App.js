import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
//import AutoCompleteComponent from './auto_complete';
import FindParking from './findParking';
import HeaderComponent from './header';


export default class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {

  }
}
  render() {
    //const { children } = this.props;
    return(
      <div id="mainContainer" className="mainContainerDiv">
        <MuiThemeProvider>
          <div id="subContainer" className="subContainerDiv">
          <HeaderComponent/>
          <FindParking/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
