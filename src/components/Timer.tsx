import { FC, useEffect, useRef, useState } from 'react';
import { Player } from '../models/Player';
import { COLORS } from '../models/const';

import styles from '../app/App.module.scss';

interface ITimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}

export const Timer: FC<ITimerProps> = ({currentPlayer, restart}) => {
  const [blackTime, setBlackTime] = useState(500);
  const [whiteTime, setWhiteTime] = useState(500);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    function startTimer() {
      if (timer.current) {
        clearInterval(timer.current)
      }
      const cback = currentPlayer?.color === COLORS.WHITE
        ? decrementWhiteTimer
        : decrementBlackTimer;
      timer.current = setInterval(cback, 1000)
    }
    
    startTimer();
  }, [currentPlayer]);


  function decrementBlackTimer() {
    setBlackTime(prev => prev - 1);
  }

  function decrementWhiteTimer() {
    setWhiteTime(prev => prev - 1);
  }

  const handleRestart = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }
    setWhiteTime(500);
    setBlackTime(500);
    restart();
  }

  return (
    <div className={styles.timer}>
      <div>
        <button className={styles.button} onClick={handleRestart}>Рестарт игры</button>
      </div> 
      <h2>Чёрные - {blackTime}</h2>     
      <h2>Белые - {whiteTime}</h2>     
    </div>
  );
};
