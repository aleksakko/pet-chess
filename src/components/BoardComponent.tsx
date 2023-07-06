import React, { FC, useEffect, useMemo, useState } from 'react';
import { Board } from '../models/Board';

import styles from '../app/App.module.scss';
import { CellComponent } from './CellComponent';
import { Cell } from '../models/Cell';

interface IBoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

export const BoardComponent: FC<IBoardProps> = ({board, setBoard}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  const click = useMemo(() => {
    return (cell: Cell) => {
      if (
        selectedCell
        && selectedCell !== cell
        && selectedCell.figure?.canMove(cell)
      ) {
        selectedCell.moveFigure(cell);
        setSelectedCell(null);
      } else setSelectedCell(cell);
    }    
  }, [selectedCell]);

  useEffect(() => {
    availableCells();
  }, [selectedCell]);

  function availableCells() {
    board.availableCells(selectedCell);
    updateBoard();
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  return (
    <div className={styles.board}>
      {board.cells.map((row, index) => 
        <React.Fragment key={index}>
          {row.map(cell => 
            <CellComponent
              click={click}
              key={cell.id}
              cell={cell}
              selected={
                cell.x === selectedCell?.x
                && cell.y === selectedCell?.y
                  ? true
                  : false
              }
            />
          )}
        </React.Fragment>
      )}
    </div>
  );
};
