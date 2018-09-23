import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';
import RainbowStructure from '../../assets/utep-driveby.jpg';
import Table from '../../assets/semi-circle-table.jpeg';
import Chandelier from '../../assets/suncadia-inn-chandelier.jpeg';


const Wrapper = styled.div`
  position: relative;
`;

const ImageWrapper = styled.img`
  display: block;
  margin: 3em auto;
 `; 

const RightArrow = styled.div`
  color: white;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 30%;
`;

const LeftArrow = styled.div`
  color: white;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 30%;
`;
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
      <Wrapper>
        <ImageWrapper 
          onClick={ this.handleClick } 
          src={ this.state.images[this.state.index] }
        />
        <LeftArrow> 
          <FontAwesomeIcon icon='arrow-left' /> 
        </LeftArrow>
        <RightArrow> 
          <FontAwesomeIcon icon='arrow-right' /> 
        </RightArrow>
      </Wrapper>
    );
  }
}