import { JSX, } from 'react';
import { Link } from 'react-router-dom';
import { OfferPreview } from '../../types/offers.types';


export interface PlaceCardProps {
  offer: OfferPreview;
  onMouseOver: (id: string | null) => void;
  isFavorites?: boolean;
}

function OfferCard({ offer, onMouseOver, }: PlaceCardProps): JSX.Element {
  const { isPremium, previewImage, price, rating, isFavorite, title, type, id } = offer;
  return (
    <article onMouseOver={() => onMouseOver(id)} onMouseLeave={() => onMouseOver(null)} className="cities__card place-card">
      {
        isPremium &&
        <div className="place-card__mark">
          <span>{isPremium && isPremium}</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${isFavorite && 'place-card__bookmark-button--active'} button`}
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
            {rating && <span style={{ width: `${20 * rating}%` }} />}
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
