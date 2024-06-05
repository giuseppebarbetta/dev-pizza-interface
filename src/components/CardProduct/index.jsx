import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { useCart } from '../../hooks/CartContext';
import * as C from './style';
import { useNavigate } from 'react-router-dom';

export function CardProduct({ product }) {
  const navigate = useNavigate();
  const { putProductInCart } = useCart();
  return (
    <C.Container>
      <C.Image src={product.url} alt="imagem do produto" />
      <C.DataContainer>
        <C.ProductName>{product.name}</C.ProductName>
        <C.ProductPrice>{product.formatedPrice}</C.ProductPrice>
        const {putProductInCart} = useCart();
        <Button
          onClick={() => {
            putProductInCart(product);
            navigate('/carrinho');
          }}
          style={{
            width: '250px',
            margin: '0',
            fontSize: '35px',
            height: '40px',
          }}
        >
          Adicionar
        </Button>
      </C.DataContainer>
    </C.Container>
  );
}
CardProduct.propTypes = {
  children: PropTypes.object,
};
