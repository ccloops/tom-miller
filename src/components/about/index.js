import React, { Component, Fragment } from 'react';

import styled from 'styled-components';

const AboutParagraph = styled.p`
  color: red;
`;

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <AboutParagraph>
        Hi, my name is Tom Miller.
        </AboutParagraph>
      </Fragment>
    );
  } 
}

