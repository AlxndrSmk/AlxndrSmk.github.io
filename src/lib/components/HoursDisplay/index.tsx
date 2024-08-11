import React from 'react';
import { useTranslation } from 'react-i18next';
import { getHourLabel } from '../../utils/getHoursLabel';

interface HoursDisplayProps {
  hours: number;
}

const HoursDisplay: React.FC<HoursDisplayProps> = ({ hours }) => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;

  const labelKey = getHourLabel(hours, lng);

  return <div>{t(labelKey, { count: hours })}</div>;
};

export default HoursDisplay;
