import React, { useEffect, useState } from 'react';

import * as C from './styles';
import formatCurrency from '../../utils/formatCurrency';
import cover from '../../assets/cover.png';
import { apiDevPizza as api } from '../../services/api';
import CardProduct from '../../components/CardProduct';

function Products() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');
      const newCategories = [{ id: 0, name: 'Todos' }, ...data];

      setCategories(newCategories);
    }

    async function loadProducts() {
      const { data: allProducts } = await api.get('products');
      const newProducts = allProducts.map((product) => {
        return { ...product, formatedPrice: formatCurrency(product.price) };
      });

      setProducts(newProducts);
    }

    loadProducts();
    loadCategories();
  }, []);

  return (
    <C.Container>
      <C.ProductsImg src={cover} alt="banner com logo dev pizza" />
      <C.CategoriesMenu>
        {categories &&
          categories.map((category) => (
            <C.CategoryBtn
              key={category.id}
              type="button"
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id);
              }}
            >
              {category.name}
            </C.CategoryBtn>
          ))}
      </C.CategoriesMenu>
      <C.ProductsContainer>
        {products &&
          products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
      </C.ProductsContainer>
    </C.Container>
  );
}

export default Products;
