import { FOOTER_BUTTONS } from '~/src/lib/consts/user-consts';
import FooterButton from '../FooterButton/FooterButton';
import './Footer.scss';
import React from 'react';

const Footer = React.memo(() => {
  return (
    <div className="c-footer">
      {FOOTER_BUTTONS.map((button) => (
        <FooterButton key={button.name} button={button} />
      ))}
    </div>
  );
});

export default Footer;
