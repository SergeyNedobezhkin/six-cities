import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

export interface Place {
  id: number | string;
  name: string;
  type: string;
  img?: string;
  activeBookmark?: boolean;
  premium?: boolean;
  price: number;
  rate: number;
}

const places: Place[] = [
  {
    id: 1,
    name: 'Beautiful & luxurious apartment at great location',
    img: 'img/apartment-01.jpg',
    type: 'Apartment',
    rate: 80,
    price: 120,
    premium: true
  },
  {
    id: 2,
    name: 'Wood and stone place',
    img: 'img/room.jpg',
    price: 80,
    type: 'Room',
    rate: 80,
    activeBookmark: true
  },
  {
    id: 3,
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    rate: 80,
    img: 'img/apartment-02.jpg',
  },
  {
    id: 4,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',

    price: 180,
    rate: 100,
    img: 'img/apartment-03.jpg',
    premium: true
  },
  {
    id: 5,
    name: 'Wood and stone place',
    type: 'Room',
    price: 80,
    rate: 80,
    img: 'img/room.jpg',
    activeBookmark: true
  },
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App places={places} />
  </React.StrictMode>
);
