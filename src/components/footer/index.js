import React, { Component, Fragment } from 'react';

import styled from 'styled-components';

const FooterContainer = styled.ul`
  margin: 0.5em auto;
  margin-top: 2em;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
`;

const FooterElement = styled.li`
  margin: 0.5em;
  text-align: center;
`;

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <FooterContainer>
          <FooterElement>designtm@comcast.net</FooterElement>
          <FooterElement>|</FooterElement>
          <FooterElement>linkedin.com/in/thomas-t-miller-3242671/</FooterElement>
        </FooterContainer>
      </Fragment>
    );
  }
}