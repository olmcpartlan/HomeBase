import React, { Component } from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom'
import SideBar from './Components/SideNavigation'
import FileContainer from './Components/FileContainer';

import Grid from '@material-ui/core/Grid';

import './App.css';
import { Redirect } from 'react-router-dom';



export default class Boost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponded: false,
      files: [],
      filePath: "",
    }
  }

  componentDidMount() {
    this.fetchDirContents("/boost_lib");
  }


  // Called on load and when an item is clicked. 
  // Checks the path on the server and responds with the contents and file information.
  fetchDirContents(newPath) {
    fetch(newPath)
      .then(res => res.json())
      .then(res => {
        this.setState({
          files: res,
          apiResponded: true,
          filePath: newPath
        })
      })

  }



  updatePathBackward(selectedDirectory) {
    this.setState({ apiResponded: false })
    // Find the selected directory in the filepoath
    let newPathIndex = this.state.filePath.indexOf(selectedDirectory);
    let newPath = this.state.filePath.substring(0, newPathIndex + selectedDirectory.length);
    this.fetchDirContents(newPath);

  }
  // Append the desired directory to the end of the current path.
  updatePathForward(selectedDirectory) {
    this.setState({ apiResponded: false });
    let newPath = `${this.state.filePath}/${selectedDirectory}`;
    // Find the contents of the new path to display.
    this.fetchDirContents(newPath);
  }

  render() {
    return (
      <Grid item xs={9} className='main-content'>
        <p style={{ textAlign: 'center' }}>main content</p>

        {this.state.apiResponded
          ? <FileContainer
            files={this.state.files}
            updatePathBackward={this.updatePathBackward.bind(this)}
            updatePathForward={this.updatePathForward.bind(this)}
          />
          : <p>Loading . . . </p>
        }

      </Grid>


    );
  }
}
