import { Offer, OfferType } from "./offers";

export type OffersCity = {
  id: string;
  title: string;
  price: number;
  type: OfferType;
  city: {
    name: string,
    location: {
      latitude: number,
      longitude: number,
      zoom: number
    }
  },
  location: {
    latitude: number,
    longitude: number,
    zoom: number
  },
  isFavorite: boolean;
  isPremium: boolean;
  rating: number | null;
  previewImage: string;
};


export const offersCity: OffersCity[] = [
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f00',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'Apartment',
    'price': 120,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4,
    'previewImage': 'img/room.jpg'
  },
  {
    'id': '2',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'House',
    'price': 333,
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 2,
    'previewImage': 'img/room.jpg'
  },
  {
    'id': '3',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'House'
    ,
    'price': 999,
    'city': {
      'name': 'Moscow',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 1,
    'previewImage': 'img/room.jpg'
  },
  {
    'id': '4',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'Apartment',
    'price': 123,
    'city': {
      'name': 'Cologone',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 0,
    'previewImage': 'img/room.jpg'
  }
];

export type OfferFavorite = OffersCity & Omit<Offer, keyof OffersCity>;
