
import React, { Component } from 'react';
import DescriptionIcon from '@material-ui/icons/Description';
import FolderIcon from '@material-ui/icons/Folder';
import Grid from '@material-ui/core/Grid';

class FileElement extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const file = this.props.file;
    return (
      <Grid item className="grid-item" >
        <DescriptionIcon className="file-icon" className="element-icon"/>
        <p>{file[1]['file-name']}</p>
        <p className='file-size'><small>{file[1]['file-size']} bytes</small></p>
      </Grid>

    );
  }
}

class DirectoryElement extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Directory is an object, first element is the clean name then some dir info
    const directory = this.props.directory;
    // Send the clicked directory name back to update the intial fetch path
    return (
      <Grid item onClick={() => this.props.updatePathForward(directory[0])}>
        <FolderIcon
          width="100px"
          color="primary"
          className="element-icon"
        />
        <p>{directory[0]}</p>
      </Grid>

    );
  }
}


export { FileElement, DirectoryElement }
