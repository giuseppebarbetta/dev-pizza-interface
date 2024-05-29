import React from 'react';

import * as C from './styles';
import cover from '../../assets/cover.png';
import { CartItems, CartResume } from '../../components';

export function Cart() {
  return (
    <C.Container>
      <C.CartImg src={cover} alt="banner com logo dev pizza" />
      <C.Wrapper>
        <CartItems />
        <CartResume />
      </C.Wrapper>
    </C.Container>
  );
}
