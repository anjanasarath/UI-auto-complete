import React from 'react';
import ReactDom from 'react-dom';
import Subheader from 'material-ui/Subheader';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

const languages = [
  'English',
  'Spanish',
  'Chineese',
  ];
  const currencies = [
  'Mexico Peso',
  'USD',
  'Renminibi'
  ];

export default class FooterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valuesLang : [],
      valuesCurr : [],
    };
       this.handleChangeLang = this.handleChangeLang.bind(this);
       this.handleChangeCurr = this.handleChangeCurr.bind(this);
    }

  handleChangeLang(event, index, valuesLang) {
     this.setState({valuesLang});
   }

  handleChangeCurr(event, index, valuesCurr) {
    this.setState({valuesCurr});
  }

  menuItemsLang(valuesLang) {
    return languages.map((lang) => (
      <MenuItem
        key={lang}
        insetChildren={true}
        checked={valuesLang && valuesLang.indexOf(lang) > -1}
        value={lang}
        primaryText={lang}
      />
    ));
  }

  menuItemsCurr(valuesCurr) {
    return currencies.map((curr) => (
      <MenuItem
        key={curr}
        insetChildren={true}
        checked={valuesCurr && valuesCurr.indexOf(curr) > -1}
        value={curr}
        primaryText={curr}
      />
    ));
  }


  render() {
             const {valuesLang, valuesCurr} = this.state;
    return(
          <div>
            <div>
              <SelectField
                multiple={false}
                hintText="Select Language"
                value={valuesLang}
                onChange={this.handleChangeLang}
              >
                {this.menuItemsLang(valuesLang)}
              </SelectField>
              <SelectField
                multiple={false}
                hintText="Select Currency"
                value={valuesCurr}
                onChange={this.handleChangeCurr}
              >
                {this.menuItemsCurr(valuesCurr)}
              </SelectField>
            </div>
            <div>
              <Subheader>Company</Subheader>
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
              <p>Host Guarantee</p>
              <p>Guest Refund</p>
              <p>Copyright Policy</p>
              <p>Consent Disagree</p>
              <p>About Us</p>
              <p>Contact Us</p>
            </div>
            <div>
              <Subheader>Discover</Subheader>
              <p>Travel Credit</p>
              <p>Trust & Safety</p>
            </div>
          <div>
            <Subheader>Hosting</Subheader>
            <p>Why Host</p>
            <p>Hospitality</p>
          </div>
      </div>
    );
  }
}
