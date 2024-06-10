import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: #3c3c3c;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.15);
  width: 260px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 53px 0;

  top: 0;
  left: 0;

  hr {
    margin: 53px 17px;
    color: #ffffff;
  }
`

export const ItemContainer = styled.div`
  height: 50px;
  width: 90%;
  display: flex;
  gap: 10px;
  align-items: center;
  border-radius: 5px;
  margin: 5px 8px;
  padding: 0 8px;

  &.active {
    background-color: #565656;
  }

  .icon {
    color: #ffffff;
  }
`

export const LinkList = styled(Link)`
  font-size: 16px;
  line-height: 17px;
  color: #ffffff;

  text-decoration: none;

  display: flex;
  align-items: center;
  gap: 10px;
`