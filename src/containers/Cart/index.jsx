import React from 'react';

import * as C from './styles';
import cover from '../../assets/cover.png';
import { CartItems } from '../../components';

export function Cart() {
  return (
    <C.Container>
      <C.CartImg src={cover} alt="banner com logo dev pizza" />
      <CartItems />
    </C.Container>
  );
}
