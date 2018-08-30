import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Frontend Dev Guidelines</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>State: { this.props.loaded } </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {loaded: state.loaded};
}

export default connect(mapStateToProps)(App);