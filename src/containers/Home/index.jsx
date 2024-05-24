import React from 'react';

import * as C from './styles';
import cover from '../../assets/cover.png';
import { CategoryCarousel, OffersCarousel } from '../../components';

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
