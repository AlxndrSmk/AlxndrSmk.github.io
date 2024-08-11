import React from 'react';
import { HapticFeedback, runHapticFeedback } from '../../../utils/vibration';
import './FooterButton.scss';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IFooterButton } from '~/src/lib/types/types';

interface FooterButtonProps {
  button: IFooterButton;
}

const FooterButton: React.FC<FooterButtonProps> = React.memo(({ button }) => {
  const { name, icon, isAnimated } = button;
  const location = useLocation();
  const isActive = () => location.pathname.split('/').includes(name);

  const { t } = useTranslation();

  return (
    <Link
      onClick={() => {
        runHapticFeedback(HapticFeedback.soft);
      }}
      to={`/${name}`}
      className={`c-footer-button press-animation ${
        isAnimated ? 'animated' : ''
      } `}
    >
      <img
        className={`c-footer-button_image ${isActive() ? 'active-item' : ''}`}
        src={`images/icons/footer/${icon}.webp`}
        alt={name}
      />
      <p className="c-footer-button_title">{t(`footer.${name}`)}</p>{' '}
    </Link>
  );
});

export default FooterButton;
