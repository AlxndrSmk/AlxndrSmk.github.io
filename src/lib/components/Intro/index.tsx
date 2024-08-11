/* eslint-disable no-constant-condition */
import './index.scss';
import Lottie from 'lottie-react';
import starAnimation from '../../../../public/images/lottie-animations/stars-intro.json'; // импортируйте
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Intro: React.FC = () => {
  const interTextLength = 32; // 32 интро фразы
  const [randomIndex, setRandomIndex] = useState<number>(1);
  const { t } = useTranslation();

  useEffect(() => {
    const random = Math.floor(Math.random() * interTextLength) + 1;
    setRandomIndex(random);
  }, []);

  return (
    <div className="c-intro">
      <Lottie
        className="c-intro__animation"
        animationData={starAnimation}
        loop={true}
        autoplay={true}
      />
      <p className="c-intro__text">{t(`introText.intro-${randomIndex}`)}</p>
    </div>
  );
};

export default Intro;
