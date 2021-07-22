import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const handleSquareClick = position => {
    if (board[position]) {
      return;
    }
    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }
        return square;
      });
    });
    setIsXNext(prev => !prev);
  };
  const renderSquareClick = position => {
    return (
      <Square
        value={board[position]}
        onClick={() => handleSquareClick(position)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquareClick(0)}
        {renderSquareClick(1)}
        {renderSquareClick(2)}
      </div>
      <div className="board-row">
        {renderSquareClick(3)}
        {renderSquareClick(4)}
        {renderSquareClick(5)}
      </div>
      <div className="board-row">
        {renderSquareClick(6)}
        {renderSquareClick(7)}
        {renderSquareClick(8)}
      </div>
    </div>
  );
};

export default Board;
