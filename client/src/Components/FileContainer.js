import React, { Component, useImperativeHandle } from 'react';
import DescriptionIcon from '@material-ui/icons/Description';
import FolderIcon from '@material-ui/icons/Folder';
import Grid from '@material-ui/core/Grid';


export default class FileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: this.props.files
    }
    console.log(this.state.files);
  }

  mapElements(elements, directoryPath) {
    console.log(elements);
    return (
      <div>
        <p style={{ color: 'blueviolet' }}>{directoryPath}</p>
        {elements.map((element, i) => {
          return <div key={i} className="element-entry">
            <Grid container >
              {element[1]['file-size'] === '0'
                ? this.createDirectoryicon(element)
                : this.createFileIcon(element)
              }

            </Grid>
          </div>
        })}
      </div>
    )

  }

  createFileIcon(file) {
    return (
      <Grid item xs={3} >
        <DescriptionIcon />
        <p>{file[0]}</p>
      </Grid>
    );
  }

  createDirectoryicon(directory) {
    return (
      <Grid item xs={3} >
        <FolderIcon />
        <p>{directory[0]}</p>
      </Grid>
    );

  }

  render() {
    const dirPath = this.state.files['directory-path'];
    const elements = Object.entries(this.state.files['elements']);
    return (
      <div>
        {elements != undefined
          ? this.mapElements(elements, dirPath)
          : <p></p>
        }
      </div>

    );
  }


}
