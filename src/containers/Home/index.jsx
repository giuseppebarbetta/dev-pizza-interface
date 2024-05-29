import React from 'react';

import * as C from './styles';
import cover from '../../assets/cover.png';
import { CategoryCarousel, Header, OffersCarousel } from '../../components';

export function Home() {
  return (
    <C.Container>
      <Header />
      <C.HomeImg src={cover} alt="banner com logo dev pizza" />
      <CategoryCarousel />
      <OffersCarousel />
    </C.Container>
  );
}
