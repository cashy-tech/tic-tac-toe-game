import { useState } from "react";
import Board from "./App";

export default function Game() {
    const [xIsNext, setxIsNext] = useState(true);
    const[history, setHistory] = useState([Array(9).fill(null)])
    const currentSquares = history[history.length - 1]

    function handlePlay(nextSquares){
        setHistory([...history, nextSquares])
        setxIsNext(!xIsNext)
    }
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol></ol>
      </div>
    </div>
  );
}
