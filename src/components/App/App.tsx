import { JSX } from 'react';

import { Place } from '../..';
import MainPage from '../../pages/MainPage/MainPage';


interface AppProps {
  places: Place[];
}

function App({ places }: AppProps): JSX.Element {
  return (
    <MainPage places={places} />
  );
}

export default App;
