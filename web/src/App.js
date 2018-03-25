import React, { Component } from 'react';
import logo from './logo.svg';
// import logo from './pen.png';
import './App.css';
import { Menu } from 'semantic-ui-react'
import GoogleTrend from './google_trend'
import { Loader } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'
import { Dimmer, Image, Segment } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'

import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100}
];


class App extends Component {
  constructor(prop){
    super(prop);
    this.state= {
      activeItem: 'editorials',
      inputVal: '',
      prediction: '',
      submitOn:false
    }
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleInputChange = (e) => this.setState({ inputVal: e.target.value })
  handleSubmit = (e) => {
    e.preventDefault(); 
    this.setState({
      submitOn:true
    })
    console.log('Submit: ' + this.state.inputVal);
    fetch('http://localhost:3001', { method: 'POST', body: this.state.inputVal })
	    .then(res => res.json())
	    .then(json => this.setState({prediction: json['res']}))//; console.log(json));
  }

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
              
              {
                this.state.prediction ?
                <Grid centered columns={2}>
                <Grid.Column>
                <Card centered>
                  <Card.Content
                    header='The prediction based on the text'
                    description={this.state.prediction}
                  />
                </Card>
                </Grid.Column>
                </Grid>
                
                : 
                this.state.submitOn ? 
                <Segment className="form" style={{height: 500}}>
                <Dimmer active page={false}>
                  <Loader size='large'>Loading</Loader>
                </Dimmer>
                </Segment>
                 :
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                      <textarea onChange={this.handleInputChange} placeholder="Paste article here:" rows="10" cols="100" id="article"></textarea>
                      <div>
                        <button className="button">Get Analysis Chart</button>
                      </div>
                    </form>
                </div>
                
              }
              
          </div>

          <div id="par2">
            <br/>
             <h2 id="titles2">Analysis Chart</h2>
                
                  <div id="divchart">
                    <GoogleTrend/>
                  </div>

                  <div id="contentChart">
                    <p>
                    <br/>
                      It is a platform that helps those who work in the newsroom brainstorm some ideas that related to the news, see what is popular, and get the best and most related keywords.
<br/>
<br/>
<br/>
                      Simply input the words that you might want to modify and the smart machine will tell you what is the trend, what is searched the most, and the flow of the trend. Try it out!
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
