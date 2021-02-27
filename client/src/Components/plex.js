import React, { Component } from 'react';
import { Grid, Button, Card, CardContent, Typography,  } from '@material-ui/core';
import ReactPlayer from 'react-player/lazy'

export default class Plex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMenu: 'movies',
      apiResponded: false,
      apiResponse: []
    }
  }

  componentDidMount() {
    this.showMenu('');
  }

  showMenu(menu)  {
    let route = '';
    menu.length == 0 ? route = 'movies' : route = menu

    fetch(`~/boost_lib/plex/${route}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          apiResponded: true,
          apiResponse: res.elements
        })


      })
  }
  mapElements(elements) {
    return (
        <Grid
          container
          alignContent='flex-start'
          className="element-body"
          >
          {elements.map((element, i) => {
            {/* xs = 3 will allow four items on each row */}
            return <Grid
                    item
                    xs={3}
                    style={{marginTop:40}}
                    className="element-entry"
                    key={i} >
              {/* Check what type of sytling to use for element */}
              {element['file-type'] === 'directory'
                ? <p> okay holdup</p>
                : this.renderElement(element)
              }
            </Grid>
          })}
        </Grid>
    );

  }

  renderElement(element) {
    console.log(element);
    return (
      <Card>
        <CardContent>
         <Typography className="plex-card-header" color="textSecondary" gutterBottom>
          {element["file-name"]}
         </Typography>
         <ReactPlayer url={element["full-path"]} />

        </CardContent>
      </Card>
    )
  }

  render() {
    return(
      <Grid item xs={9} className='main-content' >
        <p style={{ textAlign: 'center' }}>Plex</p>

        <Grid container justify='center'>
          <Button color='primary'variant='contained' onClick={() => this.showMenu('movies')}  size='large'>Movies</Button>
          <Button color='default'variant='contained' onClick={() => this.showMenu('tv')}      size='large'>TV</Button>
          <Button color='primary'variant='contained' onClick={() => this.showMenu('videos')}  size='large'>Videos</Button>

        </Grid>

        <Grid container justify='center'>
          {this.state.apiResponded
            ? this.mapElements(Object.values(this.state.apiResponse))
            : <p>Loaded . . .</p>
          }
        </Grid>

      </Grid>



    )
  }
}
