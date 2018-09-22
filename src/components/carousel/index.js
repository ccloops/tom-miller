import React, { Component, Fragment } from 'react';

import styled from 'styled-components';
import RainbowStructure from '../../assets/utep-driveby.jpg';
import Table from '../../assets/semi-circle-table.jpeg';
import Chandelier from '../../assets/suncadia-inn-chandelier.jpeg';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      index: 0,
      images: [ RainbowStructure, Table, Chandelier ],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    
    if(this.state.index === this.state.images.length - 1) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: this.state.index + 1 });
    }
  }

  render() {
    return (
      <img onClick={ this.handleClick } src={ this.state.images[this.state.index] } />
    );
  }
}