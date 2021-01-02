import react, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testVal: "asdf"
    }
  }

  componentDidMount() {
    fetch("http://0.0.0.0:8000/asdf", {
      method: 'GET',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "content-type": "application/json"
      }

    }) 
      .then(res => res.json())
      .then(res => {
        console.log(res)
      })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

        </header>
      </div>

    );
  }
}

