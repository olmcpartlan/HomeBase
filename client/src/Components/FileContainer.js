import React, { Component, useImperativeHandle } from 'react';


export default class FileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: this.props.files
    }
    console.log(this.state.files[0]);
    console.log('from child');
  }

  render() {
    return(
      <div>
      </div>

    );
  }


}
