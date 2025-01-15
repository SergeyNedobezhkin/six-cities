import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { offers, offersCity, reviewsBlock, } from './mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={offers} offersCity={offersCity} reviewsBlock={reviewsBlock} />
  </React.StrictMode>
);
