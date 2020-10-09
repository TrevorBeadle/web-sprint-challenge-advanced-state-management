import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import Smurfs from "./Smurfs";
import SmurfForm from "./SmurfForm";

import "./App.css";

class App extends Component {
  getSmurfs = e => {
    e.preventDefault();
    this.props.getSmurfs();
  };
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm />
        <button onClick={this.getSmurfs}>Get Smurfs!</button>
        {this.props.isFetching ? "Fetching Smurfs..." : ""}
        <Smurfs />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps, { getSmurfs })(App);
