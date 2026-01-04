import "./App.css";
import { Footer } from "./components/Footer";
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

        {/* Footer */}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
