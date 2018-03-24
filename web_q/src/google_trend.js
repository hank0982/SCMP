import React, { Component } from 'react';
import './App.css';
import {LineChart ,BarChart,Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

const googleTrends = require('google-trends-api');
function getGoogleTrends(keyword){
    return googleTrends.interestOverTime({keyword: keyword})
    .then(function(results){
        return results
    })
    .catch(function(err){
    console.error('Oh no there was an error', err);
    });

}
function getGoogleQuery(keyword){
    return googleTrends.relatedQueries({keyword: keyword})
    .then((res) => {
        return res
    })
    .catch((err) => {
    console.log(err);
    })
}
class GoogleTrends extends Component {
  constructor(props){
      super(props)
      this.state = {
          search : 'SCMP',
          data: null,
          top: null
      }
  }
  trendSearch(e) {
    var value = e.target.value
    this.setState({
        search: value
    })
  }
  search(){
    let that = this;
    getGoogleTrends(this.state.search).then(function(result){
        getGoogleQuery(that.state.search).then(function(s){
            that.setState({
                data: JSON.parse(result).default.timelineData,
                top: JSON.parse(s).default.rankedList[1].rankedKeyword
            })
            console.log(that.state)

        })
        
    })
  }
  render() {
    return (
      <div> 
          <Input focus placeholder='SCMP' onChange = {this.trendSearch.bind(this)}/>
          <Button onClick = {this.search.bind(this)} primary>Primary</Button>

          {
              this.state.data ? this.state.top? 
              <LineChart width={1200} height={250} data={this.state.data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="formattedTime" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
              :
              null
              : null
          }
          {
              this.state.data ? this.state.top? 
              <BarChart width={1200} height={250} data={this.state.top}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="query" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar  dataKey="value" stroke="#8884d8" />
              </BarChart>
              :
              null
              : null
          }
      </div>         
    );
  }
}

export default GoogleTrends;
