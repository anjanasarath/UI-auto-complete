import React from 'react';
import ReactDom from 'react-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
//import DateComponent from './date_time_picker';
import AutoCompleteComponent from './auto_complete';
import Styles from './styles/styles_findParking';

const FindParking = () => (
        <div>
          <div id="parking" className="containerDiv">
            <div id="subpark" className="parkingInnerDiv">
              <h1 className="h1">Find parking in <span className="secondsFont">seconds</span></h1>
              <h4 className="h4">Choose from millions of available spaces, or reserve your space
                in advance. Join over 1.5 million drivers enjoying easy parking.</h4>
              <div id="autocmplte2" className="center auto1">
                <AutoCompleteComponent style={Styles.auto1Style}/>
              </div>
              <div id="autocmplte2" className="row auto2">
                <AutoCompleteComponent style={Styles.auto2Style}/>
                <AutoCompleteComponent style={Styles.auto3Style}/>
              </div>
              <div id="rbtn" className="Rbtn">
                <RaisedButton style={Styles.rbtn1} className="w100" buttonStyle={Styles.style1.buttonStyle}>
                  Search
                </RaisedButton>
              </div>
            </div>
          </div>
        </div>
      );
      export default FindParking;
