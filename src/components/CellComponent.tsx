import { FC } from 'react';
import { Cell } from '../models/Cell';
import cn from 'classnames';

import styles from '../app/App.module.scss';

interface ICellProps {
  cell: Cell;
}

export const CellComponent: FC<ICellProps> = ({cell}) => {
  return (
    <div className={cn(styles.cell, styles[cell.color])}>

    </div>
  );
};
