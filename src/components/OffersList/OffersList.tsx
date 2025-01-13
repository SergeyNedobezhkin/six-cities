import { Offer} from '../../mocks';
import OfferCard from '../OfferCard/OfferCard';

type OfferListProps = {
  offers: Offer[];
}
export const OfferList = ({ offers }: OfferListProps) => {

  return (
    <>
      {offers.map((offer) => <OfferCard offer={offer} key={offer.id} />)}
    </>
  );
};
