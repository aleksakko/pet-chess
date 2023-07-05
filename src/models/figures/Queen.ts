import { Cell } from '../Cell';
import { COLORS, FIGURE_NAMES } from '../const';
import { Figure } from './Figure';
import blackLogo from '../../assets/b-queen.png';
import whiteLogo from '../../assets/w-queen.png';

export class Queen extends Figure {
  
  constructor(color: COLORS, cell: Cell) {
    super(color, cell);
    this.logo = color === COLORS.BLACK ? blackLogo : whiteLogo;
    this.name = FIGURE_NAMES.QUEEN;
  }
}
