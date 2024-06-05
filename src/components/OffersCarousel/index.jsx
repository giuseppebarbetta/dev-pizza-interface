import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { apiDevPizza as api } from '../../services/api';
import formatCurrency from '../../utils/formatCurrency';
import { useCart } from '../../hooks/CartContext';
import * as C from './style';
import { useNavigate } from 'react-router-dom';

export function OffersCarousel() {
  const [offers, setOffers] = useState([]);
  const { putProductInCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('products');
      const onlyOffers = data
        .filter((product) => product.offer)
        .map((product) => {
          return { ...product, formatedPrice: formatCurrency(product.price) };
        });

      setOffers(onlyOffers);
    }
    loadOffers();
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  return (
    <C.Container>
      <C.Title>OFERTAS</C.Title>
      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {offers &&
          offers.map((product) => (
            <C.ContainerItems key={product.id}>
              <C.Image src={product.url} alt="foto da oferta" />
              <p>{product.name}</p>
              <p>{product.formatedPrice}</p>
              <C.Button
                onClick={() => {
                  putProductInCart(product);
                  navigate('/carrinho');
                }}
              >
                Peça agora
              </C.Button>
            </C.ContainerItems>
          ))}
      </Carousel>
    </C.Container>
  );
}
