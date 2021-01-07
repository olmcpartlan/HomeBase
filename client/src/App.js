import React, { Component } from 'react';
import FileContainer from './Components/FileContainer';

import Grid from '@material-ui/core/Grid';

import './App.css';

export default class Appp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponded: false,
      files: []
    }
  }

  componentDidMount() {
    fetch("/boost_lib")
      .then(res => res.json())
      .then(res =>
        this.setState({
          apiResponded: true,
          files: res
        })
      )
  }

  render() {
    return (
      <div className='main-container'>
        <Grid container>
          <Grid item xs={12} className='main-header'>
            <p>header</p>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={3} className='main-sidebar'>
            <p>side bar</p>
          </Grid>
          <Grid item xs={9} className='main-content'>

            <p style={{textAlign: 'center'}}>main content</p>

            {!this.state.apiResponded 
              ? <p>Loading . .. </p>
              : <FileContainer files={this.state.files}/>
            }
          </Grid>

        </Grid>



      </div>
    )
  }
}
