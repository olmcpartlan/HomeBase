import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';

export default class Plex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMenu: 'movies',
      apiResponded: false,
      apiRespoinse: []
    }
  }

  componentDidMount() {
    this.showMenu('');
  }

  showMenu = (menu) => {
    this.setState({ selectedMenu: menu })
    fetch('~/boost_lib/plex')
      .then(res => res.text())
      .then(res => {
        console.log(res)
      })
  }

  render() {
    return(
      <Grid item xs={9} className='main-content' >
        <p style={{ textAlign: 'center' }}>Plex</p>

        <Grid container justify='center'>
          <Button color='primary'variant='contained' onClick={() => this.showMenu('movies')} size='large'>Movies</Button>
          <Button color='default'variant='contained'  size='large'>TV</Button>
          <Button color='primary'variant='contained'  size='large'>Videos</Button>

        </Grid>

        <Grid container >
          <Grid item>
            <p>movie</p>
          </Grid>
        </Grid>

      </Grid>



    )
  }
}
