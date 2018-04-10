import React from 'react';
import ReactDom from 'react-dom';
//import MuiThemeProvider from 'material-ui/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
//import DateComponent from './date_time_picker';
import AutoCompleteComponent from './auto_complete';


const style1 = {
  buttonStyle :{
    backgroundColor:"#0a0",
    maxWidth: '100%',
    }
}

export default class FindParking extends React.Component {
  render() {
    return (
      <div id="parking" className="containerDiv ">
          <h1 className="h1">Find parking in <span className="secondsFont">seconds</span></h1>
          <h4 className="h1">Choose from millions of available spaces, or reserve your space
             in advance. Join over 1.5 million drivers enjoying easy parking.</h4>
           <div id="autocmplte2" className="inputMainUi1">
           <AutoCompleteComponent/>
         </div>
          <div className="Rbtn">
            <RaisedButton buttonStyle={style1.buttonStyle}  >
             search
            </RaisedButton>
         </div>
      </div>
    );
  }
}
