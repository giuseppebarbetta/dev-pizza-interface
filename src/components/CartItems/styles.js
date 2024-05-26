import styled from "styled-components";

export const Container = styled.main`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
  padding: 10px;
  width: max-content;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;

  p {
    font-size: 16px;
    color: #b5b5b5;
  }
`

export const ContainerItems = styled.div`
  display: grid;
  grid-gap: 10px 15px;
  grid-template-columns: repeat(5, 1fr);
  width: max-content;
  padding: 10px;

  p {
    font-size: 16px;
    color: #000000;
    width: 50px;
  }

  .quantity-container {
    display: flex;
    gap: 0 17px;

    P {
      width: fit-content;
      margin-top: 5px;
    }

    button {
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }
  }
`

export const ItemImg = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 10px;
`

export const EmptyCart = styled.p`
  padding: 20px;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
`