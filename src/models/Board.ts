import { Cell } from './Cell';
import { COLORS } from './const';
import { King, Queen, Bishop, Knight, Rook, Pawn } from './figures';

export class Board {
  cells: Cell[][] = [];

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

  public getCopyBoard(): Board {
    const newBoard = new Board();
    newBoard.cells = this.cells;
    return newBoard;
  }

  public availableCells(selectedCell: Cell | null) {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        target.available = !!selectedCell?.figure?.canMove(target);
      }
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x];
  }

  private addKings() {
    new King(COLORS.BLACK, this.getCell(4, 0));
    new King(COLORS.WHITE, this.getCell(4, 7));
  }

  private addQueens() {
    new Queen(COLORS.BLACK, this.getCell(3, 0));
    new Queen(COLORS.WHITE, this.getCell(3, 7));
  }
  
  private addRooks() {
    new Rook(COLORS.BLACK, this.getCell(0, 0));
    new Rook(COLORS.BLACK, this.getCell(7, 0));
    new Rook(COLORS.WHITE, this.getCell(0, 7));
    new Rook(COLORS.WHITE, this.getCell(7, 7));
  }

  private addKnights() {
    new Knight(COLORS.BLACK, this.getCell(1, 0));
    new Knight(COLORS.BLACK, this.getCell(6, 0));
    new Knight(COLORS.WHITE, this.getCell(1, 7));
    new Knight(COLORS.WHITE, this.getCell(6, 7));  
  }

  private addBishops() {
    new Bishop(COLORS.BLACK, this.getCell(2, 0));
    new Bishop(COLORS.BLACK, this.getCell(5, 0));
    new Bishop(COLORS.WHITE, this.getCell(2, 7));
    new Bishop(COLORS.WHITE, this.getCell(5, 7));
  }

  private addPawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn(COLORS.BLACK, this.getCell(i, 1));
      new Pawn(COLORS.WHITE, this.getCell(i, 6));
    }
  }

  public addFigures() {
    this.addKings();
    this.addQueens();
    this.addRooks();
    this.addKnights();
    this.addBishops();
    this.addPawns();
  }
}
