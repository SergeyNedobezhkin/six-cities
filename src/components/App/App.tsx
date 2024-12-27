import { JSX } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Place } from '../..';
import MainPage from '../../pages/MainPage/MainPage';
import NotFound from '../../pages/NotFound/NotFound';
import LoginPage from '../../pages/LoginPage/LoginPage';
import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage';
import OfferPage from '../../pages/OfferPage/OfferPage';
import { AppRoute, AuthorizationStatus } from '../../constants/constants';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';
import { HelmetProvider } from 'react-helmet-async';


interface AppProps {
  places: Place[];
}

function App({ places }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter >
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage places={places} />}
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
          <Route path={`${AppRoute.Offer}/:offerId`} element={<OfferPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>

  );
}

export default App;
