import { ImageSizeType, OfferType } from "./offers.types";
import { CityTypes } from "./city.types";
import { LocationTypes } from "./location.types";

export type OffersCity = {
  id: string;
  title: string;
  price: number;
  type: OfferType;
  city: CityTypes;
  imageSize?: ImageSizeType;
  location: LocationTypes,
  isFavorite: boolean;
  isPremium: boolean;
  rating: number ;
  previewImage: string;
};
