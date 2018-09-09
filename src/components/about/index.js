import React, { Component, Fragment } from 'react';

import styled from 'styled-components';

import TomMiller from '../../assets/tom-miller.jpg';

const TomPhoto = styled.img`
  margin: 0 auto;
  margin-top: 3em;
  display: block;
`;

const AboutParagraph = styled.p`
  text-align: center;
  padding: 3em;
  margin: 3em auto;
  border: 2px solid black;
  max-width: 80%;
  margin-left: 10%;
  margin-right: 10%;
`;

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <TomPhoto src={TomMiller} />
        <AboutParagraph>
        Focus on interiors, detailing, lighting and architectural emphasis for cohesive, delightful experience.
        </AboutParagraph>
      </Fragment>
    );
  } 
}

