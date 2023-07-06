import logo from '../../assets/b-king.png';
import { Cell } from '../Cell';
import { COLORS, FIGURE_NAMES } from '../const';

export class Figure {
  logo: typeof logo | null;
  name: FIGURE_NAMES;
  id: number;

  constructor(
    public color: COLORS,
    public cell: Cell
  ) {
    this.cell.figure = this;
    this.logo = logo;
    this.name = FIGURE_NAMES.BASE;
    this.id = Math.random();
  }

  canMove(target: Cell): boolean {
    if(target.figure?.color === this.color)
      return false;
    if(target.figure?.name === FIGURE_NAMES.KING)
      return false;
    return true;
  }

  moveFigure(target: Cell) {
    target; // реализовать в наследниках
  }
}
