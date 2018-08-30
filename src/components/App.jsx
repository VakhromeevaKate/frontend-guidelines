import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Frontend Dev Guidelines</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Data is loaded: {this.props.appState.loaded.toString()}</p>
        <div>
          <h4>Data</h4>
          <p>Colors for header: {this.props.appState.data.colors.header}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {appState: state};
}

export default connect(mapStateToProps)(App);