import './App.css';
import Navbar from './components/Navbar'; 
import Newss from './components/Newss';
import Newssitem from './components/Newssitem';
import React, { Component } from 'react'
export class App extends Component {
// c8cb0988283346ecbd50e581028f0f3b

  render() {
    return (
      <div>
        <Navbar />
        <Newss />
      </div>
    )
  }
}

export default App


