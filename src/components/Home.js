const Home = ({onGame}) => {
  return (
    <div className="home">
      <div className="title">
        Typing game
      </div>
      <div className="author">
        Coding & <br />
        Design by Petter Bakke
      </div>
      <button className="btnPlay" onClick={ () => onGame('playGame') }>
        Play Game
      </button>
    </div>  
  
  )
}

export default Home;