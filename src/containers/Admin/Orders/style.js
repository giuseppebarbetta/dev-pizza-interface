import styled from "styled-components";
import ReactSelect from "react-select";

export const Container = styled.div`
  background-color: #efefef;
  min-height: 100vh;
  padding: 20px;
`

export const ProductsImg = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 8px;
`

export const ReactSelectStyle = styled(ReactSelect)`
  width: 215px;

  .css-13cymwt-control {
    cursor: pointer
  }
`

export const Menu = styled.div`
  width: 100%;
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`

export const LinkMenu = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #323d5d;
  padding-bottom: 8px;

  font-weight: ${ props => props.isActiveStatus && 'bold'};
  border-bottom: ${ props => props.isActiveStatus && '5px solid #c1fb72'};
`