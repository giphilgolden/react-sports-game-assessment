import React from 'react';
import './App.css';
import Game from "./components/game/Game"

function App(props) {

  const racoons = {
    name: "Russiaville Racoons",
    logoSrc: "team 1.png"
  }

  const Squirrels = {
    name: "Sheridan Squirrels",
    logoSrc: "team 2.png"
  }

  const bunnies = {
    name: "Burlington Bunnies",
    logoSrc: "team 3.png"
  }

  const hounds = {
    name: "Hammond Hounds",
    logoSrc: "team 4.png"
  }


  return (
    <div className="App">
      <Game venue="Union 525 Gem"
      homeTeam={Squirrels}
      visitingTeam={racoons}/>
      <Game venue="Sheridan Arena"
      homeTeam={bunnies}
      visitingTeam={hounds}/>
    </div>
  )
}

export default App;
