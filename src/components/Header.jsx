
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Header = () => {
  return (
    <AppBar position="static" color="white">
        <Toolbar>
            <img src={process.env.PUBLIC_URL+ 'simetrik_main_logo.svg'} alt="Logo" />
        </Toolbar>
    </AppBar>
  );
};

export default Header;



