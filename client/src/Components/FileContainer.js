import React, { Component } from 'react';


export default class FileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: this.props.files
    }
  }

  mapElements(elements, directoryPath) {
    return(
      <div>
        <p>{directoryPath}</p>
        {elements.map((element, i) => {
          return <p key={i}>{element[0]}</p>
        })}
      </div>
    )

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
