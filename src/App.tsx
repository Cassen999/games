import "./App.css";
import { Minesweeper } from "./Games/Minesweeper";
import { TicTacToe } from "./Games/TicTacToe";

function App() {
  return (
    <div className='container'>
      <h1>Games</h1>
      <TicTacToe />
      <Minesweeper />
    </div>
  );
}

export default App;
