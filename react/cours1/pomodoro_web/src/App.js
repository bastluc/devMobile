import React from 'react';
import './App.css';
import WorkTime from './WorkTime'

class App extends React.Component {
  render(){
    return(
      <div>
        <button>Lancer</button>
        <WorkTime/>
      </div>
    )
  }
}

export default App;
