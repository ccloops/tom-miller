import React, { Component, Fragment } from 'react';

import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';

import Landing from '../landing';
import Projects from '../projects';
import Drawings from '../drawings';
import About from '../about';

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
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/drawings'>Drawings</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
          <Switch>
            <Route path='/home' component={Landing} /> 
            <Route path='/projects' component={ Projects } />
            <Route path='/drawings' component={ Drawings } />
            <Route path='/about' component={ About } />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}