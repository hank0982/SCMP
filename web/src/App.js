import React, { Component } from 'react';
// import logo from './logo.svg';
// import logo from './birddog-image.jpeg';
import logo from './pen.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div id="par0">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">BirdDog &#8482;</h1>
              <h2 id="names">Scofield, Javier, Ian, Wilson, Jimmy</h2>
          </div>
        </header>
        <body className="body">
          <div id="par1">
              <br/>
              <h2 id="titles">Data Analysis</h2>
              <div className="form">
                  <form>
                    <textarea placeholder="Paste data here:" rows="10" cols="100" id="textarea"></textarea>
                    <div>
                      <button className="button">Get Analysis Chart</button>
                    </div>
                  </form>
              </div>
          </div>
          <div id="par2">
              <div>
              <br/>
                <h2 id="titles">Analysis Chart</h2>
                  <form className="form2">
                  </form>
              </div>
          </div>
          <div id="par3"></div>
        </body>
      </div>
    );
  }
}

export default App;
