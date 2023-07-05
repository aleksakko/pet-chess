import React, { FC } from 'react';
import { Board } from '../models/Board';

import styles from '../app/App.module.scss';
import { CellComponent } from './CellComponent';

interface IBoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

export const BoardComponent: FC<IBoardProps> = ({board, setBoard}) => {
  return (
    <div className={styles.board}>
      {board.cells.map((row, index) => 
        <React.Fragment key={index}>
          {row.map(cell => 
            <CellComponent
              key={cell.id}
              cell={cell}
            />
          )}
        </React.Fragment>
      )}
    </div>
  );
};
