import React from 'react';
import logo from './logo.svg';
import './App.css';
import myimage from "./téléchargement.jpg"
import"./style.css"
function App() {
  return (
    <div className='App'>
      <div style={{ border: 'solid 1px black', maxwidth: '100vw' }}>

        <h1 className='title red'>Conan</h1>

        <br />

        <img src={myimage} />

        <img src="/images.jpg" />

      </div>

      <video width="320" height="240" controls>

        <source src="/conan.mp4" type="video/mp4" />

      </video>
    </div>
  );
}

export default App;
