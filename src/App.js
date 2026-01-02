import "./App.css";
import { GameBoard } from "./components/GameBoard";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="tenzie_board">
        {/* Header */}
        <Header></Header>

        {/* Game Board */}
        <GameBoard></GameBoard>
      </div>
    </div>
  );
}

export default App;
