import React from 'react';
import SideBar from './Components/SideNavigation'
import Grid from '@material-ui/core/Grid';
import ReactDOM from 'react-dom';
import './index.css';
import Boost from './App';
import reportWebVitals from './reportWebVitals';

import { useHistory, Route,  Switch } from 'react-router';
import Plex from './Components/plex';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
      <div className='main-container'>
        <Grid container>
          <Grid item xs={12} className='main-header'>
            <p>header</p>
          </Grid>
        </Grid>
        <Grid container>
          <SideBar />
          <Switch>
            <Route path='/plex' component={Plex}/>
            <Route path='/' component={Boost}/>
          </Switch>
        </Grid>
      </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
