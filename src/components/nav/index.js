import React, { Component, Fragment } from 'react';

import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
`;

const NavUl = styled.ul`
  color: darkSalmon
  border: 2px solid black;
`;

const NavLI = styled.li`
  list-style-type: none;
  color: darkSlateGray;
`;

export default class Nav extends Component {
  render() {
    return (
      <Fragment>
        <NavBar>
        
        </NavBar>
      </Fragment>
    );
  }
}