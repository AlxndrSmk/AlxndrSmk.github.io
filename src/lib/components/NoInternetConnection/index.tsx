/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import './index.scss';

const NoInternetConnection = (props: any) => {
  const [isOnline, setOnline] = useState(true);

  useEffect(() => {
    setOnline(navigator.onLine);
  }, []);

  window.addEventListener('online', () => {
    setOnline(true);
  });

  window.addEventListener('offline', () => {
    setOnline(false);
  });

  if (isOnline) {
    return props.children;
  } else {
    return (
      <div className="c-no-internet">
        <p className="c-no-internet__header primary-shadow">
          No internet connection.
        </p>
        <p className="c-no-internet__header primary-shadow">
          Please check your network connection and refresh page.
        </p>
      </div>
    );
  }
};

export default NoInternetConnection;
