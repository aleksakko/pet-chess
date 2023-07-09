import styles from './App.module.scss';
import { BoardComponent, LostFigures, Timer } from '../components';
import { useEffect, useMemo, useState } from 'react';
import { Board } from '../models/Board';
import { COLORS } from '../models/const';
import { Player } from '../models/Player';

function App() {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer] = useState(new Player(COLORS.WHITE));
  const [blackPlayer] = useState(new Player(COLORS.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  
  const restart = useMemo(() => {
    return () => {
      const newBoard = new Board();
      newBoard.initCells();
      newBoard.addFigures();
      setBoard(newBoard);
      setCurrentPlayer(whitePlayer);
    }
  }, [whitePlayer])

  const swapPlayer = () => {
    setCurrentPlayer(currentPlayer?.color === COLORS.WHITE ? blackPlayer : whitePlayer);
  }

  useEffect(() => {
    restart();
  }, [restart]);

  return (
    <div className={styles.app}>
      <Timer
        restart={restart}
        currentPlayer={currentPlayer}
      />
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div>
        <LostFigures
          title='Чёрные фигуры'
          figures={board.lostBlackFigures}
        />
        <LostFigures
          title='Белые фигуры'
          figures={board.lostWhiteFigures}
        />
      </div>
    </div>
  )
}

export default App;
