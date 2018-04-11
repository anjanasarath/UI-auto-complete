import React from 'react';
import ReactDom from 'react-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
//import DateComponent from './date_time_picker';
import AutoCompleteComponent from './auto_complete';

const style1 = {
  buttonStyle : {
    backgroundColor:"#0a0",
    width:'100%',
    height:'100%',
    paddingTop:'10%',
    paddingBottom:'10%',
    paddingRight:'10%',
    paddingLeft:'10%',
    borderRadius:'2em',
    }
  }
  const auto1Style = {
    width: '100%',
    height: '100%',
    background: '#FFFFF',
    paddingTop: '5%',
    paddingBottom:'5%',
    borderRadius:'2em',
  }
  const auto2Style = {

  }
  const auto3Style = {
    auto:{
    width: '100%',
    height: '100%',
    paddingBottom: '10%',
    paddingTop: '10%',
    marginLeft: '19%',
    paddingRight: '23%',
    borderRadius: '.5em',
  }
}
const FindParking = () => (
        <div>
          <div id="parking" className="containerDiv">
            <div id="subpark" className="parkingInnerDiv">
            <h1 className="h1">Find parking in <span className="secondsFont">seconds</span></h1>
            <h4 className="h4">Choose from millions of available spaces, or reserve your space
             in advance. Join over 1.5 million drivers enjoying easy parking.</h4>
           <div id="autocmplte2" className="center auto1">
              <AutoCompleteComponent style={auto1Style}/>
             </div>
            <div id="autocmplte2" className="row auto2">
              <AutoCompleteComponent style={auto2Style}/>
              <AutoCompleteComponent style={auto3Style.auto}/>
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
      export default FindParking;
