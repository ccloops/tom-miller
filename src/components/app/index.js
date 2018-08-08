import React, { Component, Fragment } from 'react';

import NavLogo from '../../assets/header-image-bw.png';
import RainbowStructure from '../../assets/utep-driveby.jpg';

import '../../style/reset.scss';
import './app.scss';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <img src={NavLogo} alt='Tom is a tringle' />
        </header>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Drawings</li>
          <li>About</li>
        </ul>
        <img id='rainbow' src={RainbowStructure} alt='rainbow structure' />
      </Fragment>
    );
  }
}