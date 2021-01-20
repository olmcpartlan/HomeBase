import React, { Component, useImperativeHandle } from 'react';
import { spacing } from '@material-ui/system/spacing'; 
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
      <Grid container className="element-container" >
        {/* Filepath breadcrumbs. */}
        <Grid container justify='center' >
          <Grid item >
            <p style={{ color: 'blueviolet' }}>{directoryPath}</p>
          </Grid>

        </Grid>
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
                    style={{marginTop:20}} 
                    className="element-entry" 
                    key={i} >
              {/* Check what type of sytling to use for element */}
              {element[1]['file-type'] === 'directory'
                ? <DirectoryElement directory={element} />
                : <FileElement file={element} />
              }
            </Grid>

          })}


        </Grid>
      </Grid>
    );

  }


  render() {
    const dirPath = this.state.files['directory-path'];
    const elements = Object.entries(this.state.files['elements']);
    return (
      <Grid container style={{border:"1px solid purple"}}>
        {elements != undefined
          ? this.mapElements(elements, dirPath)
          : <p></p>
        }
      </Grid>

    );
  }


}

