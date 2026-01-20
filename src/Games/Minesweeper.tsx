import { useState } from "react";
import { BombIcon, SmileyIcon } from "../assets/icons";

type iCell = {
  isBomb: boolean;
  clicked: boolean;
};

export const Minesweeper = () => {
  const cleanBoard = () => Array.from({ length: 100 }, () => ({
    isBomb: Math.random() < 0.1,
    clicked: false,
  }));
  const [board, setBoard] = useState<iCell[]>(cleanBoard);
  const [bombsClicked, setBombsClicked] = useState<number>(0);

  const renderCell = (cell: iCell) => {
    if (cell.clicked && cell.isBomb) return BombIcon();
    else if (cell.clicked && !cell.isBomb) return SmileyIcon();
    else return "";
  };

  const cellClick = (index: number) => {
    const newBoard: iCell[] = board.map((cell, i) => {
      if (index === i) {
        cell.isBomb && setBombsClicked(bombsClicked + 1);
        return { ...cell, clicked: true };
      } else return cell;
    });

    !board[index].clicked && setBoard(newBoard);
  };

  const createGrid = () => {
    return board.map((cell, i) => {
      return (
        <div className="ms-grid-item" key={i} onClick={() => cellClick(i)}>
          {renderCell(cell)}
        </div>
      );
    });
  };

  return (
    <div>
      <h2>Minesweeper</h2>

      <button
        onClick={() => {
          setBombsClicked(0);
          setBoard(cleanBoard());
        }}
        style={{ marginBottom: '1rem' }}
      >
        Reset
      </button>

      <div className="ms-grid">
        {bombsClicked === 3 ? (
          <div className="ms-lose">BOOM everyone dies</div>
        ) : (
          createGrid()
        )}
      </div>
    </div>
  );
};
