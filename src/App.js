import './App.css';
import Home from './components/Home';
import PlayGame from './components/PlayGame';
import EndGame from './components/EndGame';
import { useState, useEffect } from 'react';

function App() {
  const [statusGame, SetStatusGame] = useState(null);
  const [score, setScore] = useState(null);

  useEffect(() => {
    if (statusGame === 'playGame') {
      setScore({
        right: 0,
        wrong: 0
      });
    }
  }, [statusGame])

  const handleChangeStatusGame = (status) => {
    SetStatusGame(status);
  }

  const handleChangeScore = (type) => {
    if(type === 'right'){
      setScore({
        ...score,
        right: score.right + 1
      })
    }else {
      setScore({
        ...score,
        wrong: score.wrong + 1
      })
    }
  }

  let layout;
  switch (statusGame) {
    case 'playGame':
      layout = <PlayGame  onChangeScore={handleChangeScore}/>
      break;
    case 'endGame':
      layout = <EndGame />
      break;
    default:
      layout = <Home onGame={handleChangeStatusGame}/>
      break;


  }
  return (
    <div className="App">
     { layout }
    </div>
  );
}

export default App;
