import logo from './logo.svg';
import './App.css';
import Fruits from './Fruits';
import React from 'react';
import FruitsCounter from './FruitsCounter';
import { useState } from 'react';
function App() {

  const [fruits] = useState([
    { fruitName: 'apple', id: 1 },
    { fruitName: 'apple', id: 2 },
    { fruitName: 'plum', id: 3 },
    { fruitName: 'amb', id: 3 },
  ])
  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits fruits={ fruits} />
      <FruitsCounter fruits = {fruits} />
    </div>
  );
}

export default App;
