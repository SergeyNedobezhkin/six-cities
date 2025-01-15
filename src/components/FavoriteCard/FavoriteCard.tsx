import { OfferFavorite, } from "../../mocks";
import { FavoriteCardOffer } from "./FavoriteCardOffer";


type FavoriteCardProps = {
  cityName: string;
  offersCity: OfferFavorite[];
}
const FavoriteCard = ({ cityName, offersCity }: FavoriteCardProps) => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{cityName}</span>
        </a>
      </div>
    </div>
    <div className="favorites__places">
      {offersCity.map((offer) => <FavoriteCardOffer offer={offer} key={offer.id} />)}
    </div>
  </li>
);

export default FavoriteCard;
