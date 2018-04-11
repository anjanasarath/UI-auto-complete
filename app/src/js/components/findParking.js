import React from 'react';
import ReactDom from 'react-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
//import DateComponent from './date_time_picker';
import AutoCompleteComponent from './auto_complete';

const style1 = {
  buttonStyle : {
    backgroundColor:"#0a0",
    }
  }

export default class FindParking extends React.Component {
  render() {
    return (
        <div>
          <div id="parking" className="containerDiv">
            <div id="subpark" className="parkingInnerDiv">
            <h1 className="h1">Find parking in <span className="secondsFont">seconds</span></h1>
            <h4 className="h4">Choose from millions of available spaces, or reserve your space
             in advance. Join over 1.5 million drivers enjoying easy parking.</h4>
           <div id="autocmplte2" className="center auto1">
              <AutoCompleteComponent/>
             </div>
            <div id="autocmplte2" className="row auto2">
              <AutoCompleteComponent/>
              <AutoCompleteComponent/>
            </div>
            <div id="rbtn" className="Rbtn auto2">
              <RaisedButton buttonStyle={style1.buttonStyle}>
                search
              </RaisedButton>
            </div>
          </div>
          </div>
        </div>
      );
    }
  }
