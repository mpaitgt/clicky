import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Game from './components/Game/Game';

class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <Game />
      </div>
    );
  }
}

export default App;