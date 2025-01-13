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
import { OfferPage } from '../../pages/OfferPage/OfferPage';
import { Offer, ReviewsBlock } from '../../mocks';


interface AppProps {
  reviewsBlock: ReviewsBlock
  offers: Offer[];
}

function App({ reviewsBlock, offers }: AppProps): JSX.Element {

  return (
    <HelmetProvider>
      <BrowserRouter >
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage offers={offers} />}
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
          <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage reviewsBlock={reviewsBlock} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>

  );
}

export default App;
