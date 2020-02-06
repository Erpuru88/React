import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state ={
    user:[
      {name: "Ajay", age: "35"}
    ]
  }

  UserEventHandler = () =>{
    this.setState(
      {
      user:[{name: "Praveen", age: "31"}]
      }
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">New User Form</h1>
        </header>
        <UserInput></UserInput>
        <UserOutput name={this.state.user[0].name} age={this.state.user[0].age}></UserOutput>
        <button onClick={this.UserEventHandler}>Click Me</button>
      </div>
    );
  }
}

export default App;
