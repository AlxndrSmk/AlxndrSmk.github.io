/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import './index.scss';
import { frontUser } from '../../consts/user-consts';
import { useTranslation } from 'react-i18next';
import formatNumber from '../../utils/formatNumber';

const HomePage = React.memo(() => {
  const { t } = useTranslation();
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
    null
  );

  const handleCardClick = (index: number) => {
    setSelectedCardIndex(index);
  };

  const getRandomDelay = () => {
    const min = 0;
    const max = 2;
    return (Math.random() * (max - min) + min).toFixed(2) + 's';
  };

  return (
    <div className="c-home">
      <div className="c-home__header">
        <div className="c-home__header-item">
          <div className="c-home__header-item-icon">
            <img src="images/icons/coin.webp" alt="coin" />
          </div>
          <div className="c-home__header-item-text">
            {formatNumber(frontUser?.balance)}
          </div>
        </div>
        <div className="c-home__header-image press-animation">
          <img src="images/icons/question.svg" alt="question" />
        </div>
        <div className="c-home__header-item">
          {t('home.LVL')} {frontUser?.level}
        </div>
      </div>
      <div className="c-home__card-container">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <img
            key={index}
            className={`c-home__card ${
              selectedCardIndex === index ? 'open' : ''
            }`}
            src="images/card.svg"
            alt="coin"
            onClick={() => handleCardClick(index)}
            style={{ animationDelay: getRandomDelay() }}
          />
        ))}
      </div>
    </div>
  );
});

export default HomePage;
