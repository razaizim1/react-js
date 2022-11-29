import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {teams.map((team) => (<Football footballerName={team.playerName} footballerAge={team.playerAge} footballerRank={team.playerRank} ></Football>))}
    </div>
  );
}


const teams = [{ playerName: "Razai Zim", playerAge: "25", playerRank: "4th" }, { playerName: "Razai Zim", playerAge: "25", playerRank: "4th" }, { playerName: "Razai Zim", playerAge: "25", playerRank: "4th" }];

// component

function Football(props) {
  return (
    <div>
      <h1> Name: {props.footballerName}</h1>
      <h1> Age: {props.footballerAge}</h1>
      <h1> Rank: {props.footballerRank}</h1>
    </div>
  )
}

export default App;
