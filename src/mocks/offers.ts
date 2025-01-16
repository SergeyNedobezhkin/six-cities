import { Offer } from "../types/offers.types";
import { CityName } from "../utils/const";


export const offers: Offer[] = [
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f00',
    'title': 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
    'price': 120,
    'city': {
      'name': CityName.Dusseldorf,
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
      'name': CityName.Amsterdam,
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
      'name': CityName.Paris,
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
      'name': CityName.Cologne,
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
