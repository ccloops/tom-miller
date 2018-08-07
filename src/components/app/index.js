import React, { Component, Fragment } from 'react';

import NavLogo from '../../assets/logo-one.jpeg';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Hello Tom</h1>
        <img src={NavLogo} alt="" />
      </Fragment>
    );
  }
}