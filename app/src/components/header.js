import React from 'react';
import ReactDom from 'react-dom';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'muicss/lib/react/divider';
import Logo from '../logo/header_logo.svg';
import Styles from './styles/styles_header';

const rightButtons = (
    <div id="headerButtons">
        <FlatButton label="Help" labelStyle={Styles.style.labelStyle} style={Styles.buttonStyle} />
        <span className="mui--divider-right"><FlatButton label="List your space" labelStyle={Styles.style.labelStyle} style={Styles.buttonStyle} /></span>
        <span className="mui--divider-right"><FlatButton label="Login" labelStyle={Styles.style.labelStyle} style={Styles.buttonStyle} />&nbsp;</span>
        <span>&nbsp;<FlatButton label="Sign Up" labelStyle={Styles.style.labelStyleRightMostBtn} style={Styles.buttonStyle} /></span>
    </div>
  );
  const HeaderComponent = () => (
    <AppBar style={Styles.appBarStyle}
      title={<span><img src={Logo}/></span>}
        iconElementRight={rightButtons}
        showMenuIconButton={false}
    />
  );
  export default HeaderComponent;
