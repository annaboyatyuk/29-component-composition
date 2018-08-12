import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Nav from './../../nav/nav';
import Landing from './../landing/index';
import Dashboard from './../dashboard/index';
import './../../style/main.scss';
import './../../style/nav.scss';
import './../../style/note.scss';
import './../../style/form.scss';


export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>

          <Nav/>

          <main>
            <Route exact path='/' component={Landing} />

            <Route path ='/dashboard' component={Dashboard} />

          </main>

        </React.Fragment>
      </BrowserRouter>
      
    );
  }

}