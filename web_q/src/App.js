import React, { Component } from 'react';
import './App.css';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import GoogleTrend from './google_trend'

class App extends Component {
  render() {
    return (
      <div> 
        <GoogleTrend/>   
      </div>
    );
  }
}

export default App;
