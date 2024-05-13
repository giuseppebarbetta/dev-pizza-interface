import React, { useEffect } from 'react';
import { apiDevPizza as api } from '../../services/api';
import * as C from './style';

function CategoryCarousel() {
  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('categories');

      console.log(response);
    }
    loadCategories();
  }, []);

  return (
    <C.Container>
      <C.Title>CATEGORIAS</C.Title>
    </C.Container>
  );
}

export default CategoryCarousel;
