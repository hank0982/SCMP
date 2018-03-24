import React, { Component } from 'react';
import logo from './logo.svg';
// import logo from './pen.png';
import './App.css';
import { Menu } from 'semantic-ui-react'

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
  constructor(prop){
    super(prop);
    this.state= {
      activeItem: 'editorials'
    }
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="App">
         <header className="App-header">

         <Menu id="menu">
         <a href="#par0">
          <Menu.Item
            name='editorials'
            active={activeItem === 'editorials'}
            onClick={this.handleItemClick}
          >
            BirdDog::Home
          </Menu.Item>
          </a>

         <a href="#par0">
          <Menu.Item
            name='reviews'
            active={activeItem === 'reviews'}
            onClick={this.handleItemClick}
            href="#par1"
          >
            Data Analysis
          </Menu.Item>
          </a>

         <a href="#par2">
          <Menu.Item
            name='upcomingEvents'
            active={activeItem === 'upcomingEvents'}
            onClick={this.handleItemClick}
          >
            Analysis Chart
          </Menu.Item>
          </a>
      </Menu>
          <div id="par0">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">BirdDog &#8482;</h1>
              <h2 id="names">Scofield, Javier, Ian, Wilson, Jimmy</h2>
          </div>
        </header>
        <div className="body">
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
                    <BarChart width={700} height={500} data={data}
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
                  <div id="contentChart">
                    <p>
                      Lorem ipsum dolor sit amet, eos nisl postulant no. Nec te timeam suscipit, laudem ceteros principes at sea. Te eum solet iuvaret, aeterno aliquam contentiones ius et. Sed pertinax adolescens ad, mel no nibh iudico, solum elitr definitiones vis ex.
<br/>
<br/>
Nam decore molestie ut. Sea ei congue prompta, quodsi euismod sensibus est ei, ipsum erroribus his an. Has id eligendi urbanitas, elitr iracundia ex vix. Meliore reprehendunt conclusionemque in his. Maiorum signiferumque eu vel, sit ad veniam audire mediocrem. Sit in populo regione mentitum, quod idque euismod mel et.
                    </p>
                  </div>
            <div className="clarify"></div>
          </div>
          <div id="par3"></div>
        </div> 
     
      </div>
    );
  }
}

export default App;
