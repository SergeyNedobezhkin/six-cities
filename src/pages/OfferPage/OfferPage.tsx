import { JSX } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/App/Header/Header';
import { OffersCard, ReviewsSection } from '../../mocks';
import OffersList from '../../components/OffersList/OffersList';


type OfferPageProps = {
  offersCard: OffersCard,
  reviewsSection: ReviewsSection
}

function OfferPage({ offersCard, reviewsSection }: OfferPageProps): JSX.Element {

  return (
    <div className="page">
      <Helmet>
        <title>{'6 cities - Offer'}</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offersCard.images.map((image, idx) => (
                <div className="offer__image-wrapper">
                  <img className="offer__image" alt={image.alt} src={image.src} key={idx} />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>{offersCard.premium ? 'Premium' : ''}</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offersCard.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: '80%' }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offersCard.rate}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{offersCard.type}</li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offersCard.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offersCard.maxPeople} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{offersCard.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offersCard.detailed_description.map((detailed, idx) =>
                    <li className="offer__inside-item" key={idx}>{detailed}</li>
                  )}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    {offersCard.host_avatar ? <img className="offer__avatar user__avatar" src={offersCard.host_avatar} width={74} height={74} alt="Host avatar" /> : ""}
                  </div>
                  <span className="offer__user-name">{offersCard.host_name}</span>
                  <span className="offer__user-status">{offersCard.host_isPro ? 'Pro' : ''}</span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offersCard.host_information}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews · <span className="reviews__amount">{reviewsSection.reviewsCount}</span>
                </h2>
                <ul className="reviews__list">
                  {reviewsSection.reviews.map((review) =>
                    <li key={review.id} className="reviews__item">
                      <div className="reviews__user user">
                        <div className="reviews__avatar-wrapper user__avatar-wrapper">
                          <img
                            className="reviews__avatar user__avatar"
                            src={review.avatar}
                            width={54}
                            height={54}
                            alt="Reviews avatar"
                          />
                        </div>
                        <span className="reviews__user-name">{review.name}</span>
                      </div>
                      <div className="reviews__info">
                        <div className="reviews__rating rating">
                          <div className="reviews__stars rating__stars">
                            <span style={{ width: '80%' }} />
                            <span className="visually-hidden">{review.rating}</span>
                          </div>
                        </div>
                        <p className="reviews__text">
                          {review.comment}
                        </p>
                        <time className="reviews__time" dateTime="2019-04-24">
                          {review.date.toLocaleDateString()}
                        </time>
                      </div>
                    </li>
                  )}
                </ul>
                <form className="reviews__form form" action="#" method="post">
                  <label className="reviews__label form__label" htmlFor="review">
                    Your review
                  </label>
                  <div className="reviews__rating-form form__rating">
                    <input
                      className="form__rating-input visually-hidden"
                      name="rating"
                      defaultValue={5}
                      id="5-stars"
                      type="radio"
                    />
                    <label
                      htmlFor="5-stars"
                      className="reviews__rating-label form__rating-label"
                      title="perfect"
                    >
                      <svg className="form__star-image" width={37} height={33}>
                        <use xlinkHref="#icon-star" />
                      </svg>
                    </label>
                    <input
                      className="form__rating-input visually-hidden"
                      name="rating"
                      defaultValue={4}
                      id="4-stars"
                      type="radio"
                    />
                    <label
                      htmlFor="4-stars"
                      className="reviews__rating-label form__rating-label"
                      title="good"
                    >
                      <svg className="form__star-image" width={37} height={33}>
                        <use xlinkHref="#icon-star" />
                      </svg>
                    </label>
                    <input
                      className="form__rating-input visually-hidden"
                      name="rating"
                      defaultValue={3}
                      id="3-stars"
                      type="radio"
                    />
                    <label
                      htmlFor="3-stars"
                      className="reviews__rating-label form__rating-label"
                      title="not bad"
                    >
                      <svg className="form__star-image" width={37} height={33}>
                        <use xlinkHref="#icon-star" />
                      </svg>
                    </label>
                    <input
                      className="form__rating-input visually-hidden"
                      name="rating"
                      defaultValue={2}
                      id="2-stars"
                      type="radio"
                    />
                    <label
                      htmlFor="2-stars"
                      className="reviews__rating-label form__rating-label"
                      title="badly"
                    >
                      <svg className="form__star-image" width={37} height={33}>
                        <use xlinkHref="#icon-star" />
                      </svg>
                    </label>
                    <input
                      className="form__rating-input visually-hidden"
                      name="rating"
                      defaultValue={1}
                      id="1-star"
                      type="radio"
                    />
                    <label
                      htmlFor="1-star"
                      className="reviews__rating-label form__rating-label"
                      title="terribly"
                    >
                      <svg className="form__star-image" width={37} height={33}>
                        <use xlinkHref="#icon-star" />
                      </svg>
                    </label>
                  </div>
                  <textarea
                    className="reviews__textarea form__textarea"
                    id="review"
                    name="review"
                    placeholder="Tell how was your stay, what you like and what can be improved"
                    defaultValue={''}
                  />
                  <div className="reviews__button-wrapper">
                    <p className="reviews__help">
                      To submit review please make sure to set{' '}
                      <span className="reviews__star">rating</span> and describe
                      your stay with at least{' '}
                      <b className="reviews__text-amount">50 characters</b>.
                    </p>
                    <button
                      className="reviews__submit form__submit button"
                      type="submit"
                      disabled={false}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
          <section className="offer__map map" />
        </section>
        <div className="container">

          <OffersList offersCard={offersCard} />
        </div>
      </main>
    </div>

  );
}

export default OfferPage;
