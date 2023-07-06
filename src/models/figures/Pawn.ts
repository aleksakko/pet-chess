import { Cell } from '../Cell';
import { COLORS, FIGURE_NAMES } from '../const';
import { Figure } from './Figure';
import blackLogo from '../../assets/b-pawn.png';
import whiteLogo from '../../assets/w-pawn.png';

export class Pawn extends Figure {
  
  isFirstStep = true;

  constructor(color: COLORS, cell: Cell) {
    super(color, cell);
    this.logo = color === COLORS.BLACK ? blackLogo : whiteLogo;
    this.name = FIGURE_NAMES.PAWN;
  }
  
  canMove(target: Cell): boolean {
    if(!super.canMove(target))
      return false;
    const direction = this.cell.figure?.color === COLORS.BLACK ? 1 : -1;
    const firstStepDirection = this.cell.figure?.color === COLORS.BLACK ? 2 : -2;

    if ( // проверка на движение только по y и возможность первого хода на 2 клетки вперед
      (target.y === this.cell.y + direction || this.isFirstStep
        && (target.y === this.cell.y + firstStepDirection))
      && target.x === this.cell.x
      && this.cell.board.getCell(target.x, target.y).isEmpty()
    ) return true;

    if (
      target.y === this.cell.y + direction
      && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
      && this.cell.isEnemy(target)
    ) return true;

    return false;
  }

  moveFigure(target: Cell) {
    super.moveFigure(target);
    this.isFirstStep = false;
  }
}
