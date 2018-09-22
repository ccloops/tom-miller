import React, { Component, Fragment } from 'react';

import './projects.scss';

import styled from 'styled-components';

import RainbowStructure from '../../assets/utep-driveby.jpg';

const ProjectsContainer = styled.p`
  color: red;
  text-align: center;
  margin-top: 5em;
  width: 35em;
  height: 25em;
  border: 2px solid black;
`;
export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlipped: false,
    };

    this.handleFlip = this.handleFlip.bind(this);
  }

  handleFlip() {
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  render() {
    console.log(this.state);
    return (
      <Fragment>
        <img className={ !this.state.isFlipped ? 'show' : 'hide' } onClick={ this.handleFlip } src={ RainbowStructure } />
        <ProjectsContainer className={ !this.state.isFlipped ? 'hide' : 'show' } onClick={ this.handleFlip }>The text I am talking about</ProjectsContainer>
      </Fragment>
    );
  }
}
