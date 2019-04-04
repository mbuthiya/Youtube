import React, { Component } from 'react';
// import logo from './logo.svg';
import Navbar from './components/navbar/Navbar'
import PlayerComponent from "./components/Player-Component/PlayerComponent"
import './App.css';

class App extends Component {
  render() {
    return(
     <div className="page">

       <Navbar/>  
       <PlayerComponent/>
     </div>
    )
  }
}

export default App;
