import { useState } from 'react';
import { Offer } from '../../mocks';
import OfferCard from '../OfferCard/OfferCard';

type OfferListProps = {
  offers: Offer[];
}
export const OfferList = ({ offers }: OfferListProps) => {
  
  const [activeCard, setActiveCard] = useState(false);

  const onMouseOver = (id: any) => {
    setActiveCard(id);
  };

  return (
    <>
      {offers.map((offer) => <OfferCard onMouseOver={onMouseOver} offer={offer} key={offer.id} />)}
    </>
  );
};
