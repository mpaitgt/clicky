import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import Instructions from './components/Instructions/Instructions';
import Game from './components/Game/Game';

function App() {
  return (
    <div>
      <Navbar />
      {/* <Instructions /> */}
      <Game />
    </div>
  );
}

export default App;