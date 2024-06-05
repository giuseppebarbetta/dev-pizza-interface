import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';
import Person from '../../assets/person.png';
import Cart from '../../assets/cart.png';
import * as C from './styles';

export function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { logout, userData } = useUser();

  const logoutUser = () => {
    logout();
    navigate('/login');
  };

  return (
    <C.Container>
      <C.ContainerLeft>
        <C.PageLink onClick={() => navigate('/')} isActive={pathname === '/'}>
          Home
        </C.PageLink>
        <C.PageLink
          onClick={() => navigate('/produtos')}
          isActive={pathname.includes('produtos')}
        >
          Ver Produtos
        </C.PageLink>
      </C.ContainerLeft>

      <C.ContainerRight>
        <C.PageLink onClick={() => navigate('/carrinho')}>
          <img src={Cart} alt="cart icon" />
        </C.PageLink>
        <C.Line></C.Line>
        <C.PageLink>
          <img src={Person} alt="person icon" />
        </C.PageLink>
        <C.ContainerText>
          <p>Olá, {userData.name}</p>
          <C.PageLink className="exit" onClick={logoutUser}>
            Sair
          </C.PageLink>
        </C.ContainerText>
      </C.ContainerRight>
    </C.Container>
  );
}
