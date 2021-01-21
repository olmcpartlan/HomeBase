import React, { Component } from 'react';
import FileContainer from './Components/FileContainer';

import Grid from '@material-ui/core/Grid';

import './App.css';

export default class Appp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponded: false,
      files: [],
      filePath: "/boost_lib",
    }
  }

  componentDidMount() {
    this.fetchDirContents();
  }

  // Called on load and when an item is clicked. 
  // Checks the path on the server and responds with the contents and file information.
  fetchDirContents() {
    fetch(this.state.filePath)
      .then(res => res.json())
      .then(res => {
        this.setState({ 
          apiResponded: true,
          files: res,
        })

      });


  }

  updatePathBackward(selectedDirectory) {
    this.setState({apiResponded: false})
    let newPathIndex = this.state.filePath.indexOf(selectedDirectory);
    let newPath = this.state.filePath.substring(0, newPathIndex + selectedDirectory.length);
    this.setState({ 
      filePath: newPath
    });
    this.fetchDirContents();

  }
  // Append the desired directory to the end of the current path.
  updatePathForward(selectedDirectory) {
    this.setState({apiResponded: false});
    this.setState({ 
      filePath: `${this.state.filePath}/${selectedDirectory}`
    });
    console.log(this.state.filePath)
    this.fetchDirContents();

  }

  render() {
    console.log("files") 
    console.log(this.state.files) 
    return (
      <div className='main-container' >
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

            <p style={{ textAlign: 'center' }}>main content</p>

            {!this.state.apiResponded
              ? <p>Loading . . . </p>
              : <FileContainer 
                  files={this.state.files} 
                  updatePathBackward={this.updatePathBackward.bind(this)}
                  updatePathForward={this.updatePathForward.bind(this)}
                />
            }
          </Grid>

        </Grid>



      </div>
    )
  }
}
