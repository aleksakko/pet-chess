import { FC } from 'react';
import { Cell } from '../models/Cell';
import cn from 'classnames';

import styles from '../app/App.module.scss';

interface ICellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

export const CellComponent: FC<ICellProps> = ({cell, selected, click}) => {
  return (
    <div
      className={cn(
        styles.cell,
        styles[cell.color],
        selected ? styles.selected : '',
        cell.available && cell.figure ? styles.availableFigureCell : ''
      )}
      onClick={() => click(cell)}
    >
      {cell.available && !cell.figure && <div className={styles.available} />}
      {cell.figure?.logo && <img src={cell.figure.logo} alt=''/>}
    </div>
  );
};
