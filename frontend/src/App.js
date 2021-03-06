import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:3001")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }))
        .catch(err=>err);
  }

  componentWillMount() {
    this.callAPI();
  }

  render () {
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"></img>
          <h1 className="App-title">Welcome to react</h1>
        </header>
        <p className="App-intro">the count is: {this.state.apiResponse}</p>
    </div>
  }
}
export default App;