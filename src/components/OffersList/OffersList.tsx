import { useState } from 'react';
import OfferCard from '../OfferCard/OfferCard';
import { OfferPreview } from '../../types/offers.types';

type OfferListProps = {
  offers: OfferPreview[];
}
export const OfferList = ({ offers }: OfferListProps) => {

  const [activeCard, setActiveCard] = useState<OfferPreview['id'] | null>(null);

  function handleCardHover(offerId: OfferPreview['id'] | null) {
    setActiveCard(offerId);
  }

  return (
    <>
      {offers.map((offer) => <OfferCard block='cities' imageSizeCard="large" onCardHover={handleCardHover} offer={offer} key={offer.id} />)}
    </>
  );
};
