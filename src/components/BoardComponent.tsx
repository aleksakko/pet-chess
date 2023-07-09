import React, { FC, useEffect, useMemo, useState } from 'react';
import { Board } from '../models/Board';

import styles from '../app/App.module.scss';
import { CellComponent } from './';
import { Cell } from '../models/Cell';
import { Player } from '../models/Player';
import { COLORS } from '../models/const';

interface IBoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}

export const BoardComponent: FC<IBoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  const updateBoard = useMemo(() => {
    return () => {
      const newBoard = board.getCopyBoard();
      setBoard(newBoard);
    }
  }, [board, setBoard])

  const click = useMemo(() => {
    return (cell: Cell) => {
      if (
        selectedCell
        && selectedCell !== cell
        && selectedCell.figure?.canMove(cell)
      ) {
        selectedCell.moveFigure(cell);
        swapPlayer();
        setSelectedCell(null);
        updateBoard();
      } else {
        if (cell.figure?.color === currentPlayer?.color) 
          setSelectedCell(cell);
      }
    }    
  }, [selectedCell, currentPlayer, updateBoard, swapPlayer]);
  
    const availableCells = useMemo(() => {
      return () => {
        board.availableCells(selectedCell);
        updateBoard();
      }
    }, [board, selectedCell, updateBoard]);

  useEffect(() => {
    availableCells();
  }, [availableCells, selectedCell]);

  return (
    <div>
      <h3>Ход {currentPlayer?.color === COLORS.WHITE ? 'белых' : 'черных'}</h3>
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
    </div>
  );
};
