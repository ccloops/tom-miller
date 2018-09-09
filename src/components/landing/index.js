import React, { Component, Fragment } from 'react';

import RainbowStructure from '../../assets/utep-driveby.jpg';

export default class Landing extends Component {
  render() {
    return (
      <Fragment>
        <img id='rainbow' src={ RainbowStructure } alt='rainbow structure' />
      </Fragment>
    );
  }
}