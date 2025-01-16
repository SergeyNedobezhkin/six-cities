import { CityTypes } from "./city.types";
import { LocationTypes } from "./location.types";
import { UserTypes } from "./user.types";

export type OfferType = 'Apartment' | 'House' | 'Room';

export type OfferPreview = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: CityTypes;
  location: LocationTypes;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number | null;
  previewImage: string;
  description: string;
};

export type Offer = OfferPreview & {
  bedrooms: number;
  goods: string[];
  host: UserTypes
  images: string[];
  maxAdults: number;
}

