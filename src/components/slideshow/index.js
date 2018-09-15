import React, { Component, Fragment } from 'react';

import 'style-loader!css-loader!react-responsive-carousel/lib/styles/carousel.css';


import { Carousel } from 'react-responsive-carousel';

import RainbowStructure from '../../assets/utep-driveby.jpg';
import Table from '../../assets/semi-circle-table.jpeg';
import Chandelier from '../../assets/suncadia-inn-chandelier.jpeg';

export default class SlideShow extends Component {
  render() {
    return(
      <Carousel showArrows={ true }>
        <div>
          <img src={ RainbowStructure } />
        </div>
        <div>
          <img src={ Table } />
        </div>
        <div>
          <img src={ Chandelier } />
        </div>
      </Carousel>
    );
  }
}