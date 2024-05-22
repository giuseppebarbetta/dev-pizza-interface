import React from 'react';

import * as C from './styles';
import cover from '../../assets/cover.png';
import CategoryCarousel from '../../components/CategoryCarousel';
import OffersCarousel from '../../components/OffersCarousel';

function Home() {
  return (
    <C.Container>
      <C.HomeImg src={cover} alt="banner com logo dev pizza" />
      <CategoryCarousel />
      <OffersCarousel />
    </C.Container>
  );
}

export default Home;
