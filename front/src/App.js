import React, {Component} from 'react';
import './App.css';
import TOC from './components/TOC';

class Subject extends Component{
  render() {
    return (
      <header className="App-header">
      Mail Box
      </header>
    );
  }
}

class App extends Component{
  
  render() {
    return (
      <div className="App">
      <Subject></Subject>
      <TOC></TOC>
      </div>
      
    );
  }
}
export default App;
