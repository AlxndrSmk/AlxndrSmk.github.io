/* eslint-disable @typescript-eslint/no-explicit-any */
import './App.css';
import '@twa-dev/sdk';
import { BrowserRouter as Router } from 'react-router-dom';
import Routings from './lib/router/Routings';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './lib/styles/theme';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const overflow = 100
    document.body.style.overflowY = 'hidden'
    document.body.style.marginTop = `${overflow}px`
    document.body.style.height = window.innerHeight + overflow + "px"
    document.body.style.paddingBottom = `${overflow}px`
    window.scrollTo(0, overflow)

    const updateContentHeight = () => {
      const windowHeight = window.innerHeight;
      const webApp = (window as any)?.Telegram?.WebApp;
      if (webApp) {
        webApp.MainButton.setParams({ height: windowHeight });
      }
    };
    const ensureDocumentIsScrollable = () => {
      const isScrollable =
        document.documentElement.scrollHeight > window.innerHeight;
      // Check if the document is scrollable
      if (!isScrollable) {
        document.documentElement.style.setProperty(
          "height",
          "calc(100vh + 1px)",
          "important"
        );
      }
    }

    const preventCollapse = (e: any) => {
      if (window.scrollY === 0) {
        e.preventDefault();
        window.scrollTo(0, 1);
      }
    }

    // Инициализация WebApp
    (window as any)?.Telegram?.WebApp?.ready();
    (window as any)?.Telegram?.WebApp?.expand();

    // Установка обработчика события resize
    window.addEventListener('resize', updateContentHeight);
    window.addEventListener("load", ensureDocumentIsScrollable);
    window.addEventListener("touchstart", preventCollapse, { passive: false });
    window.addEventListener("touchmove", preventCollapse, { passive: false });

    // Первоначальная установка высоты контента
    updateContentHeight();
    ensureDocumentIsScrollable();

    // Очистка обработчика при размонтировании компонента
    return () => {
      window.removeEventListener('resize', updateContentHeight);
      window.removeEventListener('load', ensureDocumentIsScrollable);
      window.removeEventListener('touchstart', preventCollapse);
      window.removeEventListener('touchmove', preventCollapse);
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routings />
      </Router>
    </ChakraProvider>
  );
}

export default App;
