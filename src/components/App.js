import React, { Component } from 'react';
import PublishMessage from './PublishMessage';
import SetUsername from './SetUsername';

class App extends Component {
  render() {PublishMessage
    return (
      <div>
        <h2>Reaction</h2>
        <SetUsername />
        <hr/>
        <PublishMessage />
        <hr/>
        <PMessageBoard />
      </div>
    );
  }
}

export default App;
