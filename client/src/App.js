import react, { Component, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FileContainer from './Components/FileContainer';

export default function App() {
  const [elements, setElements] = useState({})
  let apiResponse = {};
  let apiResponded = false;

  // Probably need useEffect lifecycle but no luck.
  fetch("/boost_lib")
    .then(res => res.json())
    .then(res => {
      setElements(res)
      apiResponded = true
    });

  return (
    <div>
      <div>
        {apiResponded
          ? <p>hasn't loaded</p>
          : <div>
            <FileContainer files={elements} />
          </div>
        }

      </div>
    </div>
  )

}
