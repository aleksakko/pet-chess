import { Cell } from '../Cell';
import { COLORS, FIGURE_NAMES } from '../const';
import { Figure } from './Figure';
import blackLogo from '../../assets/b-king.png';
import whiteLogo from '../../assets/w-king.png';

export class King extends Figure {
  
  constructor(color: COLORS, cell: Cell) {
    super(color, cell);
    this.logo = color === COLORS.BLACK ? blackLogo : whiteLogo;
    this.name = FIGURE_NAMES.KING;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target))
      return false;

    const dx = Math.abs(this.cell.x - target.x); 
    const dy = Math.abs(this.cell.y - target.y); 
    
    return (dx === 0 || dx === 1) && (dy === 0 || dy === 1);
  }
}
