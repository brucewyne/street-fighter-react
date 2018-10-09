import React, { Component } from 'react';

import classes from './App.css';
import HealthMeter from './components/HealthMeter/HealthMeter';
import CustomButton from './components/Button/Button';
import Log from './components/Log/Log';
import Modal from './components/Modal/Modal';


class App extends Component {

  state = {
    playerHealth: 100,
    opponentHealth: 100,
    messageLog: [],
    gameInPlay: true,
    showModal: false,
    gameOverMessage: ""
  };

  
}

export default App;
