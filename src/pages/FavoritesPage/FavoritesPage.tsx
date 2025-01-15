import { Helmet } from "react-helmet-async";
import Header from "../../components/App/Header/Header";

import FavoriteCard from "../../components/FavoriteCard/FavoriteCard";
import { OfferFavorite } from "../../mocks";

type FavoritesPageProps = {
  offersCity: OfferFavorite[],
};

function FavoritesPage({ offersCity }: FavoritesPageProps): JSX.Element {

  return (
    <div className="page">
      <Helmet>
        <title>{'6 cities - Favorites'}</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {offersCity.map((offer) => (
                <li key={offer.id} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <FavoriteCard cityName={offer.city.name} key={offer.id} offersCity={offersCity} />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
