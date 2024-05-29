import React, { useEffect, useState } from 'react';
import { Button } from '../Button';
import formatCurrency from '../../utils/formatCurrency';
import { useCart } from '../../hooks/CartContext';
import { apiDevPizza as api } from '../../services/api';
import * as C from './styles';
import { toast } from 'react-toastify';

export function CartResume() {
  const { cartProducts } = useCart();

  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryTax] = useState(5);

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);

    setFinalPrice(sumAllItems);
  }, [cartProducts, , deliveryTax]);

  const submitOrder = async () => {
    const order = cartProducts.map((product) => {
      return { id: product.id, quantity: product.quantity };
    });

    await toast.promise(api.post('orders', { products: order }), {
      pending: 'Realizando seu pedido...',
      success: 'Pedido realizado com sucesso!',
      error: 'Falha ao realizar seu o pedido, tente novamente...',
    });
  };

  return (
    <div>
      <C.Container>
        <div className="container-top">
          <h2 className="title">Resumo do Pedido:</h2>
          <p className="items">Itens</p>
          <p className="items-price">{formatCurrency(finalPrice)}</p>
          <p className="delivery-tax">Taxa de Entrega</p>
          <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
        </div>

        <div className="container-bottom">
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </div>
      </C.Container>
      <Button onClick={submitOrder} style={{ marginTop: 26 }}>
        Finalizar Pedido
      </Button>
    </div>
  );
}
