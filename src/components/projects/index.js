import React, { Component, Fragment } from 'react';

import styled from 'styled-components';

const ProjectsContainer = styled.p`
  color: red;
`;

export default class Projects extends Component {
  render() {
    return (
      <Fragment>
        <ProjectsContainer>
          I am the Projects Component
        </ProjectsContainer>
      </Fragment>
    );
  }
}

