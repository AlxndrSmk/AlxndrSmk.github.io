/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import './index.scss';
import { useTranslation } from 'react-i18next';
import { Boost } from '../../types/types';
import HoursDisplay from '../HoursDisplay';
import { HapticFeedback, runHapticFeedback } from '../../utils/vibration';

interface ImproveCardProps {
  boost: Boost;
}

const ImproveCard: React.FC<ImproveCardProps> = React.memo(({ boost }) => {
  const { type, level, value, upgradePrice, nextValue } = boost;
  const { t } = useTranslation();

  const renderCurrentValue = () => {
    switch (type) {
      case 'potion':
        return <HoursDisplay hours={value} />;
      case 'cookie':
        return <p>{`x${value}`}</p>;
      case 'clover':
        return <p>{`${value}%`}</p>;
      default:
        return null;
    }
  };

  const renderImprovement = () => {
    switch (type) {
      case 'potion':
        return <HoursDisplay hours={nextValue} />;
      case 'cookie':
        return `x${nextValue}`;
      case 'clover':
        return `${nextValue}%`;
      default:
        return null;
    }
  };

  return (
    <div className="c-improve-card">
      <div className="c-improve-card__image-container">
        <img
          className="c-improve-card__image"
          src={`images/boosts/${type}/${level}.svg`}
          alt={type}
        />
      </div>
      <div className="c-improve-card__text-container">
        <div className="c-improve-card__name">{t(`improve.${type}`)}</div>

        <div className="c-improve-card__current-container">
          <div className="c-improve-card__current">
            {level === 0
              ? `${t(`improve.Now`)}: `
              : `${t(`improve.Now`)}: «${t(`${type}.name-${level}`)}»`}
          </div>
          {renderCurrentValue()}
        </div>
        <div className="c-improve-card__description">
          {level === 0 ? ` ` : `${t(`${type}.description-${level}`)}`}
        </div>
        <div
          onClick={() => runHapticFeedback(HapticFeedback.soft)}
          className="c-improve-card__upgrade press-animation"
        >
          <p>{t(`improve.Improve`)}:</p>
          <img
            className="c-improve-card__coin"
            src={`images/icons/coin.webp`}
            alt={type}
          />
          <div>{upgradePrice}</div>
          <div className="c-improve-card__divider">⟩</div>
          <div>{renderImprovement()}</div>
        </div>
      </div>
    </div>
  );
});

export default ImproveCard;
