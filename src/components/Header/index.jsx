import React from 'react';
import Person from '../../assets/person.png';
import Cart from '../../assets/cart.png';
import * as C from './styles';

export function Header() {
  return (
    <C.Container>
      <C.ContainerLeft>
        <C.PageLink>Home</C.PageLink>
        <C.PageLink>Ver Produtos</C.PageLink>
      </C.ContainerLeft>

      <C.ContainerRight>
        <C.PageLink>
          <img src={Cart} alt="cart icon" />
        </C.PageLink>
        <C.Line></C.Line>
        <C.PageLink>
          <img src={Person} alt="person icon" />
        </C.PageLink>
        <C.ContainerText>
          <p>Olá, NomeDoCliente</p>
          <C.PageLink className="exit">Sair</C.PageLink>
        </C.ContainerText>
      </C.ContainerRight>
    </C.Container>
  );
}
