import styled from "styled-components";

export const Container = styled.main`
  background-color: #000000;
  min-height: calc(100vh - 73px);
`

export const ProductsImg = styled.img`
  width: 100%;
`

export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 17px;
`

export const CategoryBtn = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${props => props.isActiveCategory && '2px solid #c1fb72'};
  color: ${props => (props.isActiveCategory ? '#c1fb72' : '#9a9a9d')};
  padding-bottom: 5px;
  font-size: 17px;
  font-weight: ${props => props.isActiveCategory && 'bold'};
  line-height: 20px;
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 17px;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 1430px) {
    grid-template-columns: repeat(2, 1fr);
  }
`