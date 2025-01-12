import { JSX } from 'react';
import { OffersCard } from '../../mocks';


export interface PlaceCardProps {
  offersCard: OffersCard;

}

function PlaceCard({ offersCard }: PlaceCardProps): JSX.Element {

  // const { premium, img, active_bookmark, name, type, price, rate, } = place;
  return (
    <article className="cities__card place-card">
      {
        offersCard.premium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={offersCard.images[0].src}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offersCard.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${offersCard.active_bookmark && 'place-card__bookmark-button--active'} button`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${offersCard.rate}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">
            {offersCard.host_name}
          </a>
        </h2>
        <p className="place-card__type">{offersCard.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
