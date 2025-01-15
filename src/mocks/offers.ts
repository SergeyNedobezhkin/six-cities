

export type OfferType = 'Apartment' | 'House';

export type Offer = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number | null;
  previewImage: string;
  description?: string;
  bedrooms?: number;
  goods?: string[];
  host?: {
    name: string;
    isPro: boolean;
    avatarUrl: string;
  };
  images?: string[];
  maxAdults?: number;
};

export const offers: Offer[] = [
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f00',
    'title': 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
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
    'previewImage': 'img/room.jpg',
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    bedrooms: 3,
    goods: [
      "Heating"
    ],
    host:
    {
      name: "Oliver Conner",
      avatarUrl: "https://url-to-image/image.png",
      isPro: false
    },
    images:
      [
        "https://url-to-image/image.png"
      ],
    maxAdults: 4
  },
  {
    'id': '2',
    'title': 'Beautiful & luxurious studio at great location',
    type: 'House',
    'price': 293,
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
    'isFavorite': true,
    'isPremium': true,
    'rating': 2,
    'previewImage': 'img/apartment-01.jpg',
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    bedrooms: 3,
    goods: [
      "Heating"
    ],
    host:
    {
      name: "Oliver Conner",
      avatarUrl: "https://url-to-image/image.png",
      isPro: false
    },
    images:
      [
        "https://url-to-image/image.png"
      ],
    maxAdults: 4
  },

  {
    'id': '3',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'House',
    'price': 100,
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
    'isFavorite': true,
    'isPremium': false,
    'rating': 1,
    'previewImage': 'img/apartment-02.jpg',
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    bedrooms: 3,
    goods: [
      "Heating"
    ],
    host:
    {
      name: "Oliver Conner",
      avatarUrl: "https://url-to-image/image.png",
      isPro: false
    },
    images:
      [
        "https://url-to-image/image.png"
      ],
    maxAdults: 4
  },
  {
    'id': '4',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'House',
    'price': 133,
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
    'previewImage': 'img/apartment-03.jpg',
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    bedrooms: 3,
    goods: [
      "Heating"
    ],
    host:
    {
      name: "Oliver Conner",
      avatarUrl: "https://url-to-image/image.png",
      isPro: false
    },
    images:
      [
        "https://url-to-image/image.png"
      ],
    maxAdults: 4
  },
]



// {
//   "id": "6af6f711-c28d-4121-82cd-e0b462a27f00",
//   "title": "Beautiful & luxurious studio at great location",
//   "type": "apartment",
//   "price": 120,
//   "city": 
//   {
//   "name": "Amsterdam",
//   "location": 
//   {
//   "latitude": 52.35514938496378,
//   "longitude": 4.673877537499948,
//   "zoom": 8
//   }
//   },
//   "location": 
//   {
//   "latitude": 52.35514938496378,
//   "longitude": 4.673877537499948,
//   "zoom": 8
//   },
//   "isFavorite": false,
//   "isPremium": false,
//   "rating": 4,
//   "previewImage": "https://url-to-image/image.png",
//   "description": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
//   "bedrooms": 3,
//   "goods": 
//   [
//   "Heating"
//   ],
//   "host": 
//   {
//   "name": "Oliver Conner",
//   "avatarUrl": "https://url-to-image/image.png",
//   "isPro": false
//   },
//   "images": 
//   [
//   "https://url-to-image/image.png"
//   ],
//   "maxAdults": 4
//   }
