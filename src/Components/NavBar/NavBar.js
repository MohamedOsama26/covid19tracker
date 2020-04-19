import React, { Component } from 'react';
import logo from './covid-19logo.png';
import './NavBar.scss';

class NavBar extends Component {
  render() {
    return (
      	<nav className='navbar'>
			<img src={logo} alt='COVID-19 Tracker'/>
		</nav>
    );
  }
}

export default NavBar;
