/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, type ReactNode } from 'react';

import Meta from './Meta';
import './Index.scss';
import { useSelector } from 'react-redux';
import { selectLoader } from '../store/loaderReducer';
import Footer from './components/Footer/Footer';
import React from 'react';
import Intro from '../components/Intro';
import { useLocation } from 'react-router-dom';

const images: string[] = ['images/intro.webp'];

const preloadImages = (imageUrls: string[]) => {
  return Promise.all(
    imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          resolve(url);
        };
        img.onerror = (err) => {
          console.error(`Error loading image: ${url}`, err);
          reject(err);
        };
      });
    })
  );
};

type LayoutProps = {
  children: ReactNode;
};

const Layout = React.memo(({ children }: LayoutProps) => {
  const [imagesLoading, setImagesLoading] = useState(true);
  const [minimumTimeElapsed, setMinimumTimeElapsed] = useState(false);
  const location = useLocation();
  const isLoading = useSelector(selectLoader);

  useEffect(() => {
    const minimumLoadTime = 3000; // 3 секунды
    const loadImages = preloadImages(images);

    const loadTimer = new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, minimumLoadTime);
    });

    Promise.all([loadImages, loadTimer])
      .then(() => {
        setImagesLoading(false);
        setMinimumTimeElapsed(true);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке изображений или таймера', error);
        setImagesLoading(false);
        setMinimumTimeElapsed(true);
      });
  }, []);

  const showLoader = isLoading || imagesLoading || !minimumTimeElapsed;

  const getPathClass = () => {
    if (location.pathname.split('/').includes('home')) {
      return 'home';
    } else if (location.pathname.split('/').includes('profile')) {
      return 'profile';
    } else {
      return '';
    }
  };

  return (
    <div className={`c-main__wrapper ${getPathClass()}`}>
      <Meta />
      {showLoader ? (
        <div>
          <Intro />
        </div>
      ) : (
        <></>
      )}
      {!showLoader ? (
        <>
          <div className="c-main">{children}</div>
          <Footer />
        </>
      ) : (
        <></>
      )}
    </div>
  );
});

export default Layout;
