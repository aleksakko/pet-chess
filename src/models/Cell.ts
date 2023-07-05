import { Board } from './Board';
import { COLORS } from './const';
import { Figure } from './figures/Figure';

export class Cell {
  available: boolean; // Можешь ли переместиться
  id: number; // Для реакт ключей

  constructor(
    public board: Board,
    readonly x: number,
    readonly y: number,
    readonly color: COLORS,
    public figure: Figure | null
  ) {
    this.available = false;
    this.id = Math.random();
  }
}
