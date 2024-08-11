import { useEffect, useState } from 'react';
import './index.scss';

const TimeUnit = ({ unit }: { unit: string }) => {
  const [currentUnit, setCurrentUnit] = useState(unit);
  const [prevUnit, setPrevUnit] = useState(unit);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (unit !== currentUnit) {
      setPrevUnit(currentUnit);
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentUnit(unit);
      }, 0); // смена числа в середине анимации
      setTimeout(() => {
        setIsFlipping(false);
      }, 600); // завершение анимации через 600ms
    }
  }, [unit, currentUnit]);

  return (
    <div className="time-unit">
      <div className={`flip ${isFlipping ? 'flip-animate' : ''}`}>
        <div className={`digit old ${isFlipping ? 'flip-out' : ''}`}>
          {prevUnit}
        </div>
        <div className={`digit new ${isFlipping ? 'flip-in' : ''}`}>
          {currentUnit}
        </div>
      </div>
    </div>
  );
};

export default TimeUnit;
