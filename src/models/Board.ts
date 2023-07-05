import { Cell } from './Cell';
import { COLORS } from './Colors';

export class Board {
  cells: Cell[][];

  constructor() {
    this.cells = [];
  }

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        if(((i + j) & 1) === 0) {
          row.push( new Cell(this, j, i, COLORS.WHITE, null) );
        } else {
          row.push( new Cell(this, j, i, COLORS.BLACK, null) );
        }        
      }
      this.cells.push(row);    
    }
  }
}
