import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import * as C from './style';

function CardProduct({ product }) {
  return (
    <C.Container>
      <C.Image src={product.url} alt="imagem do produto" />
      <C.DataContainer>
        <C.ProductName>{product.name}</C.ProductName>
        <C.ProductPrice>{product.formatedPrice}</C.ProductPrice>
        <Button
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

export default CardProduct;

CardProduct.propTypes = {
  children: PropTypes.object,
};
