import React, { Component, Fragment } from 'react';

import styled from 'styled-components';

const DrawingsContainer = styled.p`
  color: red;
`;

export default class Drawings extends Component {
  render() {
    return (
      <Fragment>
        <DrawingsContainer>
          I am the Drawings Component
        </DrawingsContainer>
      </Fragment>
    );
  }
}

