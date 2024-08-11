import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import store from './lib/store/store';
import './lib/styles/base.scss';
import NoInternetConnection from './lib/components/NoInternetConnection';
import './i18n';

// this manifest is used temporarily for development purposes
// const manifestUrl = import.meta.env.MINIFEST_URL;
const manifestUrl = 'https:///tonconnect-manifest.json';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <Provider store={store}>
      <NoInternetConnection>
        <App />
      </NoInternetConnection>
    </Provider>
  </TonConnectUIProvider>
);
