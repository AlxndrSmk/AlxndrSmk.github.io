import { useEffect, useState } from 'react';
import './index.scss';
import TimeUnit from './TimeUnit';

interface NumberDisplayProps {
  number: number;
}

const NumberDisplay: React.FC<NumberDisplayProps> = ({ number }) => {
  const formatNumberString = (num: number) => {
    return num.toLocaleString();
  };

  const [formattedNumber, setFormattedNumber] = useState(
    formatNumberString(number)
  );

  useEffect(() => {
    setFormattedNumber(formatNumberString(number));
  }, [number]);

  return (
    <div className="number-display">
      {formattedNumber.split('').map((digit, index) => (
        <div key={index} className="digit-unit-wrapper">
          <TimeUnit unit={digit} />
        </div>
      ))}{' '}
    </div>
  );
};

export default NumberDisplay;
