import React, { Component, Fragment } from 'react';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowRight);
library.add(faArrowLeft);

import Landing from '../landing';
import Projects from '../projects';
import Drawings from '../drawings';
import About from '../about';
import Footer from '../footer';

import NavLogo from '../../assets/header-image-bw.png';

import '../../style/reset.scss';
import './app.scss';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <header>
            <img src={NavLogo} alt='Tom is a tringle' />
          </header>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/drawings'>Drawings</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
          <Switch>
            <Route path='/projects' component={ Projects } />
            <Route path='/drawings' component={ Drawings } />
            <Route path='/about' component={ About } />
            <Route path='/' component={Landing} /> 
          </Switch>
          <Footer />
        </Fragment>
      </BrowserRouter>
    );
  }
}