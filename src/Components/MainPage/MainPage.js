import React, { Component } from 'react';
import ClassicCounter from '../ClassicCounter/ClassicCounter';
import './MainPage.scss'
import Axios from 'axios';

class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      confirmed : 0,
      dead : 0,
      recovered : 0,
      active : 0,
      newConfermed : 0,
      newDeath : 0,
      newRecovered : 0
    };
  }
  componentDidMount(){
    let confirmedNum = 0;
    let deadNum = 0;
    let recoveredNum = 0;
    let activeNum = 0;
    let lastConfirmedNum = 0;
    let lastDeadNum = 0;
    let lastRecoveredNum = 0;
    Axios.get(`https://www.trackcorona.live/api/countries`)
    .then(res => {
      const counters = res.data.data;
      for(let i=0;i<230;i++){
        confirmedNum += counters[i].confirmed;
        deadNum += counters[i].dead;
        recoveredNum += counters[i].recovered;
      }
      activeNum = confirmedNum - deadNum - recoveredNum ;
      this.setState({
        confirmed : confirmedNum,
        dead : deadNum,
        recovered : recoveredNum,
        active : activeNum,
      });
    });
    Axios.get(`https://api.covid19api.com/summary`)
    .then(res => {
      const global = res.data.Global;
      lastConfirmedNum = global.TotalConfirmed;
      lastDeadNum = global.TotalDeaths;
      lastRecoveredNum = global.TotalRecovered;
      this.setState({
        newConfermed : this.state.confirmed-lastConfirmedNum,
        newDeath : this.state.dead-lastDeadNum,
        newRecovered : this.state.recovered-lastRecoveredNum
      });
    });
  }
  render() {
    return (
      <>
      <div className='background'></div>
      <div className='all-counters-box'>
        <ClassicCounter color='#ffe8c3' number={this.state.confirmed} title='Confermed'/>
        <br/>
        <ClassicCounter color='#fbb03b' number={this.state.active} title='Active'/>
        <ClassicCounter color='#f71f27' number={this.state.dead} title='Dead'/>
        <ClassicCounter color='#00ff00' number={this.state.recovered} title='Recoverd'/>
      </div>
      <div className='today-counters-box'>
        <h2>New</h2>
        <ClassicCounter color='#fbb03b' number={this.state.newConfermed} title='Confermed'/>
        <ClassicCounter color='#f71f27' number={this.state.newDeath} title='Dead'/>
        <ClassicCounter color='#00ff00' number={this.state.newRecovered} title='Recoverd'/>
      </div>
      </>
    );
  }
}

export default MainPage;
