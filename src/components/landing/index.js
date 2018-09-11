import React, { Component, Fragment } from 'react';

import RainbowStructure from '../../assets/utep-driveby.jpg';
import SlideShow from '../slideshow';


import styled from 'styled-components';

const RainbowImage = styled.img`
  margin: 0 auto;
  margin-top: 2em;
  margin-left: 25%;
  margin-right: 25%;
  width: 50%;
  display: block;
`;

export default class Landing extends Component {
  render() {
    return (
      <Fragment>
        <SlideShow />
      </Fragment>
    );
  }
}