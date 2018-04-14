import React from 'react';
import ReactDom from 'react-dom';
//import { Connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import AutoCompleteComponent from './auto_complete';
import Styles from './styles/styles_findParking';

const styles = {
  customWidth: {
    width: '25em',
  },
};

class BookingFormComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
                value: 1,
              }
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event, index, value) {
    this.setState({value});
  }
  render() {
    return(
    <div>
      <h1 className="h1">Find parking in <span className="secondsFont">seconds</span></h1>
      <h4 className="h4">Choose from millions of available spaces, or reserve your space
        in advance. Join over 1.5 million drivers enjoying easy parking.</h4>
        <div id="autocmplte2" className="center auto1">
          <AutoCompleteComponent style={Styles.auto1Style}/>
        </div>
        <div id="dropMenu" className="center auto1">
          <DropDownMenu
            title="Space"
           value={this.state.value}
           onChange={this.handleChange}
           style={styles.customWidth}
           autoWidth={false}
         >
         <MenuItem value={1} primaryText="Space" />
         <MenuItem value={2} primaryText="Parking" />
         <MenuItem value={2} primaryText="Warehouse" />
          </DropDownMenu>
        </div>
        <div id="rbtn" className="Rbtn">
          <RaisedButton style={Styles.rbtn1} className="w100" buttonStyle={Styles.style1.buttonStyle}>
            Search
          </RaisedButton>
        </div>
        <div id="rbtn" className="Rbtn">
          <RaisedButton style={Styles.rbtn1} className="w100" buttonStyle={Styles.style1.buttonStyle}>
            I Feel Lucky
          </RaisedButton>
        </div>
    </div>
  );
}
}
export default BookingFormComponent;
