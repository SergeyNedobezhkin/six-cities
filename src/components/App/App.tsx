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


interface AppProps {
  places: Place[];
}

function App({ places }: AppProps): JSX.Element {
  return (
    <BrowserRouter >
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage places={places} />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoutes authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesPage />
            </PrivateRoutes>
          } />
        <Route path={AppRoute.Offer} element={<OfferPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
