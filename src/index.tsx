import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { offers, reviewsBlock, } from './mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={offers} reviewsBlock={reviewsBlock} />
  </React.StrictMode>
);
