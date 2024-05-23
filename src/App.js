import './App.css';
import Home from './components/Home';
import PlayGame from './components/PlayGame';
import EndGame from './components/EndGame';
import { useState } from 'react';

function App() {
  const [statusGame, SetStatusGame] = useState(null);

  let layout;
  switch (statusGame) {
    case 'playGame':
      layout = <PlayGame />
      break;
    case 'endGame':
      layout = <EndGame />
      break;
    default:
      layout = <Home />
      break;


  }
  return (
    <div className="App">
     {layout}
    </div>
  );
}

export default App;
