import React, { Component, useImperativeHandle } from 'react';
import Grid from '@material-ui/core/Grid';
import { DirectoryElement, FileElement } from './FileElements';


export default class FileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: this.props.files
    }
    console.log(this.state.files);
  }

  mapElements(elements, directoryPath) {
    return (
      <div>
        <Grid container spacing={10}>
          <Grid item >
            <p style={{ color: 'blueviolet' }}>{directoryPath}</p>

          </Grid>

        </Grid>
        <Grid container  xs={12} spacing={3} >


          {elements.map((element, i) => {
            return <Grid item xs={3} className="element-entry" key={i}>
              {element[1]['file-size'] === '0'
                ? <DirectoryElement directory={element} />
                : <FileElement file={element} />
              }
            </Grid>

          })}


        </Grid>
      </div>
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

