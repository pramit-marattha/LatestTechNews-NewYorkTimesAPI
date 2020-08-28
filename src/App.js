import React from 'react';
import './assets/js/main';
import './assets/css/styles.css'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <h1> Latest Tech News</h1>
        <div id="headlines"></div>
      </div>
    );
  }
}

export default App;
