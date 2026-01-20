import { useEffect, useState } from "react";
import { createOIconSVG, createXIconSVG } from "../assets/icons";

type iPlayer = "X" | "O";
type iCell = iPlayer | "";

export const TicTacToe = () => {
  const [board, setBoard] = useState<iCell[]>(Array(9).fill(""));
  const [player, setPlayer] = useState<iPlayer>("X");
  const [winner, setWinner] = useState<iPlayer | null>(null);

  const winConditions: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // Diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];

  const determineWinner = () => {
    winConditions.forEach((condition) => {
      if (
        board[condition[0]] === "X" &&
        board[condition[1]] === "X" &&
        board[condition[2]] === "X"
      )
        setWinner("X");
      else if (
        board[condition[0]] === "O" &&
        board[condition[1]] === "O" &&
        board[condition[2]] === "O"
      )
        setWinner("O");
    });
  };

  const handleClick = (index: number) => {
    const newArray: iCell[] = board.map(
      (cell, i) => (i === index && (player as iPlayer)) || cell,
    );
    if (board[index] === "") {
      setBoard(newArray);
      setPlayer((prev) => {
        return prev === "X" ? "O" : "X";
      });
    } else return;
  };

  const renderCell = (cell: string) => {
    if (cell === "X") return createXIconSVG();
    else if (cell === "O") return createOIconSVG();
    else return "";
  };

  const createGrid = () => {
    return board.map((cell, i) => {
      return (
        <div className="ttt-grid-item" key={i} onClick={() => handleClick(i)}>
          {renderCell(cell)}
        </div>
      );
    });
  };

  useEffect(() => {
    determineWinner();
  }, [board]);

  return (
    <div>
      <h2>Tic Tac Toe</h2>
      <button
        onClick={() => {
          setBoard(Array(9).fill(""));
          setPlayer("X");
          setWinner(null);
        }}
      >
        Reset
      </button>
      {!winner && <div>Turn: {player === "X" ? "Player 1" : "Player 2"}</div>}

      <div className="ttt-grid">
        {winner ? (
          <div className="ttt-win">
            Winner is Player {winner === "X" ? "1" : "2"}!
          </div>
        ) : (
          createGrid()
        )}
      </div>
    </div>
  );
};
