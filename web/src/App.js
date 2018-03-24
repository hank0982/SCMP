import React, { Component } from 'react';
// import logo from './logo.svg';
// import logo from './birddog-image.jpeg';
import logo from './pen.png';
import './App.css';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

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
              <br/>
              <h2 id="titles2">Analysis Chart</h2>
              <div id="divchart">
                <BarChart width={1000} height={500} data={data}
                margin={{top: 50, right: 5, left: 20, bottom: 5}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                      <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="pv" fill="#4A86F0" />
                    <Bar dataKey="uv" fill="#91EA1F" />
                </BarChart>
              </div>
          </div>
          <div id="par3"></div>
        </body>
      </div>
    );
  }
}

export default App;
