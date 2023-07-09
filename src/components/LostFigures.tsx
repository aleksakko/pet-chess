import { FC } from 'react';
import styles from '../app/App.module.scss';
import { Figure } from '../models/figures';

interface ILostFiguresProps {
  title: string;
  figures: Figure[];
}

export const LostFigures: FC<ILostFiguresProps> = ({title, figures}) => {
  return (
    <div className={styles.lost}>
      <h3>{title}</h3>
      {figures.map(figure =>
        <div key={figure.id}>
          {figure.logo && <img width={20} height={20} src={figure.logo} />}
          {figure.name}
        </div>
      )}
    </div>
  );
};
