import react, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FileContainer from './Components/FileContainer';

export default class Appp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponded: false,
      files: []
    }
  }

  componentDidMount() {
    fetch("/boost_lib")
      .then(res => res.json())
      .then(res => 
        this.setState({
          apiResponded: true,
          files: res
        })
      )
  }

  render() {
    return(
      <div>
        { !this.state.apiResponded 
        ? <p>hasn't loaded</p>
        : <div>
          <FileContainer files={this.state.files} />
          </div>
        }

      </div>
    )
  }
}
