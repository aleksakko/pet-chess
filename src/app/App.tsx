import styles from './App.module.scss';
import { BoardComponent } from '../components/BoardComponent';
import { useEffect, useMemo, useState } from 'react';
import { Board } from '../models/Board';

function App() {
  const [board, setBoard] = useState(new Board());
  
  const restart = useMemo(() => {
    return () => {
      const newBoard = new Board();
      newBoard.initCells();
      setBoard(newBoard);
    }
  }, [])

  useEffect(() => {
    restart();
  });


  return (
    <div className={styles.app}>
      <BoardComponent
        board={board}
        setBoard={setBoard}
      />
    </div>
  )
}

export default App;
