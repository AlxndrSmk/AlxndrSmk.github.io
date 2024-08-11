/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import './index.scss';
import { useTranslation } from 'react-i18next';
import ImproveCard from '../../components/ImproveCard';
import { frontUser } from '../../consts/user-consts';

const ImprovePage = React.memo(() => {
  const { t } = useTranslation();

  return (
    <div className="c-improve">
      <div className="c-improve__balance">{t(`improve.balance`)}</div>
      <div className="c-improve__balance-wrapper">
        <img
          className="c-improve__balance-image"
          src="images/icons/coin.webp"
          alt="coin"
        />
        <div className="c-improve__balance-value">
          {frontUser.balance.toLocaleString()}
        </div>
      </div>
      <div className="c-improve-description">{t(`improve.description`)}</div>
      <div className="c-improve-card-container">
        {frontUser?.boosts.map((boost, index) => (
          <ImproveCard key={index} boost={boost} />
        ))}
      </div>
    </div>
  );
});

export default ImprovePage;
