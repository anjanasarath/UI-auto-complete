import React from 'react';
import ReactDom from 'react-dom';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'muicss/lib/react/divider';
import Logo from '../../logo/header_logo.svg';

const style = {
  labelStyle:{
    color:'#212121',
    textTransform: 'regular',
  },
  labelStyleRightMostBtn:{
    color:'#8BC34A',
    textTransform: 'regular',
  },
}
  const appBarStyle = {
  backgroundColor:'#FFFFF',
  zIndex:2000,
}

  const buttonStyle = {
    backgroundColor: 'transparent',
    };

  const rightButtons = (
    <div id="headerButtons">
        <FlatButton label="Help" labelStyle={style.labelStyle} style={buttonStyle} />
        <span className="mui--divider-right"><FlatButton label="List your space" labelStyle={style.labelStyle} style={buttonStyle} /></span>
        <span className="mui--divider-right"><FlatButton label="Login" labelStyle={style.labelStyle} style={buttonStyle} />&nbsp;</span>
        <span>&nbsp;<FlatButton label="Sign Up" labelStyle={style.labelStyleRightMostBtn} style={buttonStyle} /></span>
      </div>
  );
const HeaderComponent = () => (
  <AppBar style={appBarStyle}
    title={<span><img src={Logo}/></span>}
      iconElementRight={rightButtons}
      showMenuIconButton={false}
      />
);
export default HeaderComponent;
