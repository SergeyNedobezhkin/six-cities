import { useState } from 'react';
import OfferCard from '../OfferCard/OfferCard';
import { OfferPreview } from '../../types/offers.types';

type OfferListProps = {
  offers: OfferPreview[];
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
