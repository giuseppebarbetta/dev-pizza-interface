import styled from "styled-components";
import ReactSelect from "react-select";

export const Container = styled.div`
  background-color: #efefef;
  min-height: 100vh;
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
  padding: 20px 10px;

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

  font-size: 14px;

  &.active {
    font-weight: bold;
    border-bottom: 5px solid #c1fb72;    
  }
`