import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { apiDevPizza as api } from '../../services/api';
import * as C from './style';

function CategoryCarousel() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');

      setCategories(data);
    }
    loadCategories();
  }, []);

  return (
    <C.Container>
      <C.Title>CATEGORIAS</C.Title>
      <Carousel itemsToShow={4}>
        {categories &&
          categories.map((category) => (
            <div key={category.id}>
              <img src={category.url} alt="foto da categoria" />
              <button>{category.name}</button>
            </div>
          ))}
      </Carousel>
    </C.Container>
  );
}

export default CategoryCarousel;
