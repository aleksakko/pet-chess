import { Cell } from '../Cell';
import { COLORS, FIGURE_NAMES } from '../const';
import { Figure } from './Figure';
import blackLogo from '../../assets/b-rook.png';
import whiteLogo from '../../assets/w-rook.png';

export class Rook extends Figure {
  
  constructor(color: COLORS, cell: Cell) {
    super(color, cell);
    this.logo = color === COLORS.BLACK ? blackLogo : whiteLogo;
    this.name = FIGURE_NAMES.ROOK;
  }
  
  canMove(target: Cell): boolean {
    if (!super.canMove(target))
      return false;
    if (this.cell.isEmptyHorizontal(target) || this.cell.isEmptyVertical(target))
      return true;
    return false;
  }
}
