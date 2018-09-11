import React, { Component, Fragment } from 'react';

import { Carousel } from 'react-responsive-carousel';

import RainbowStructure from '../../assets/utep-driveby.jpg';
import Table from '../../assets/semi-circle-table.jpeg';
import Chandelier from '../../assets/suncadia-inn-chandelier.jpeg';

export default class SlideShow extends Component {
  render() {
    return(
      <Carousel>
        <div>
          <img src={ RainbowStructure } />
          <p className='legend'>Legend 1</p>
        </div>
        <div>
          <img src={ Table } />
          <p className='legend'>Legend 2</p>
        </div>
        <div>
          <img src={ Chandelier } />
          <p className='legend'>Legend 3</p>
        </div>
      </Carousel>
    );
  }
}