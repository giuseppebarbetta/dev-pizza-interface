import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext({});

//Retorna todos os dados necessários por toda aplicação

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const updateLocalStorage = async (products) => {
    await localStorage.setItem('devpizza:cartInfo', JSON.stringify(products));
  };

  const putProductInCart = async (product) => {
    const cartIndex = cartProducts.findIndex((item) => item.id === product.id);

    let newCartProducts = [];
    if (cartIndex >= 0) {
      newCartProducts = cartProducts;
      newCartProducts[cartIndex].quantity =
        newCartProducts[cartIndex].quantity + 1;

      setCartProducts(newCartProducts);
    } else {
      product.quantity = 1;
      newCartProducts = [...cartProducts, product];
      setCartProducts(newCartProducts);
    }

    await updateLocalStorage(newCartProducts);
  };

  const deleteProduct = async (productId) => {
    const newCart = cartProducts.filter((product) => product.id !== productId);
    setCartProducts(newCart);
    await updateLocalStorage(newCart);
  };

  const increaseProducts = async (productId) => {
    const newCart = cartProducts.map((product) => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product;
    });

    setCartProducts(newCart);

    await updateLocalStorage(newCart);
  };

  const decreaseProducts = async (productId) => {
    const cartIndex = cartProducts.findIndex((item) => item.id === productId);

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((product) => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product;
      });
      setCartProducts(newCart);
      await updateLocalStorage(newCart);
    } else {
      deleteProduct(productId);
    }
  };

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = await localStorage.getItem('devpizza:cartInfo');

      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData));
      }
    };

    loadUserData();
  }, []);

  return (
    <CartContext.Provider
      value={{
        putProductInCart,
        cartProducts,
        increaseProducts,
        decreaseProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used with CartContext');
  }

  return context;
};

CartProvider.propTypes = {
  children: PropTypes.node,
};
