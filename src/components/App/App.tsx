import { JSX } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import MainPage from '../../pages/MainPage/MainPage';
import NotFound from '../../pages/NotFound/NotFound';
import LoginPage from '../../pages/LoginPage/LoginPage';
import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage';
import { AppRoute, AuthorizationStatus } from '../../constants/constants';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';
import { HelmetProvider } from 'react-helmet-async';
import { OffersCard, ReviewsSection, } from '../../mocks';
import OfferPage from '../../pages/OfferPage/OfferPage';


interface AppProps {
  reviewsSection: ReviewsSection;
  offersCards: OffersCard[];
}

function App({ reviewsSection, offersCards, }: AppProps): JSX.Element {

  return (
    <HelmetProvider>
      <BrowserRouter >
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage offersCards={offersCards} />}
          />
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRoutes redirectTo={AppRoute.Login} authorizationStatus={AuthorizationStatus.NoAuth}>
                <LoginPage />
              </PrivateRoutes>
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoutes redirectTo={AppRoute.Login} authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesPage />
              </PrivateRoutes>
            } />
          <Route path={`${AppRoute.Offer}/:id`} element={
            <OfferPage reviewsSection={reviewsSection} offersCard={offersCards[1]} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>

  );
}

export default App;
