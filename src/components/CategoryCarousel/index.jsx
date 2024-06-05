import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { apiDevPizza as api } from '../../services/api';
import * as C from './style';
import { useNavigate } from 'react-router-dom';

export function CategoryCarousel() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const toCategoryId = (category) => {
    navigate('/produtos', { state: { categoryId: category.id } });
  };

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');

      setCategories(data);
    }
    loadCategories();
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
      <C.Title>CATEGORIAS</C.Title>
      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {categories &&
          categories.map((category) => (
            <C.ContainerItems key={category.id}>
              <C.Image src={category.url} alt="foto da categoria" />
              <C.Button onClick={() => toCategoryId(category)}>
                {category.name}
              </C.Button>
            </C.ContainerItems>
          ))}
      </Carousel>
    </C.Container>
  );
}
