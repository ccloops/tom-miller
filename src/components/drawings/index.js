import React, { Component, Fragment } from 'react';

import styled from 'styled-components';

import Drawing from '../../assets/marq-gr-fp-elev.jpeg';

const DrawingsContainer = styled.div`
  display: grid;
`;

const DrawingsImages = styled.img`
  max-width: 30%;
  border: 2px solid black;
  padding: 1em;
  margin: 2em;
`;

export default class Drawings extends Component {
  render() {
    return (
      <Fragment>
        <DrawingsContainer>
          <DrawingsImages src={ Drawing } />
        </DrawingsContainer>
      </Fragment>
    );
  }
}

