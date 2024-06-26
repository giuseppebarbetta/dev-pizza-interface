import styled from "styled-components";

export const Container = styled.main`
  background-color: #ffffff;
  padding: 15px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .container-top {
    display: grid;
    grid-gap: 17px 53px;
    grid-template-areas: 
    'title title'
    'items items-price'
    'delivery-tax delivery-tax-price';

    .title {
      grid-area: title;
      margin-bottom: 17px;
    }

    .items {
      grid-area: items;
    }

    .items-price {
      grid-area: items-price;
    }

    .delivery-tax {
      grid-area: delivery-tax;
    }

    .delivery-tax-price {
      grid-area: delivery-tax-price;
    }
  }

  .container-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;

    margin-top: 53px;
  }

`

