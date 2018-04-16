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
  ];

export default class FooterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values : [],
    };
       this.handleChangeLang = this.handleChangeLang.bind(this);
       this.handleChangeCurr = this.handleChangeCurr.bind(this);
    }

  handleChangeLang(event, index, values) {
     this.setState({values});
   }

  handleChangeCurr(event, index, values) {
    this.setState({values});
  }

  menuItemsLang(values) {
    return languages.map((lang) => (
      <MenuItem
        key={lang}
        insetChildren={true}
        checked={values && values.indexOf(lang) > -1}
        value={lang}
        primaryText={lang}
      />
    ));
  }

  menuItemsCurr(values) {
    return currencies.map((curr) => (
      <MenuItem
        key={curr}
        insetChildren={true}
        checked={values && values.indexOf(curr) > -1}
        value={curr}
        primaryText={curr}
      />
    ));
  }


  render() {
             const {values} = this.state;
    return(
          <div>
            <div>
              <SelectField
                multiple={false}
                hintText="Select Language"
                value={values}
                onChange={this.handleChangeLang}
              >
                {this.menuItemsLang(values)}
              </SelectField>
              <SelectField
                multiple={false}
                hintText="Select Currency"
                value={values}
                onChange={this.handleChangeCurr}
              >
                {this.menuItemsCurr(values)}
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
