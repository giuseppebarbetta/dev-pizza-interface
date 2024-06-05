import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 26px 0;
  gap: 26px;

  background-color: #efefef;

  .rec.rec-arrow {
    background-color: #c1fb72;
    color: #000000;

    &:hover {
      background-color: #efefef;
      color: #c1fb72;
      border: 2px solid #c1fb72;
    }
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }

` 

export const Title = styled.h1`
  font-size: 53px;
  font-family: "Monoton", sans-serif;
  font-style: normal;
`

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const  Image = styled.img`
  width: 230px;
  height: 210px;

  border-radius: 8px;
`

export const  Button = styled.button`
  width: 100%;
  border-radius: 8px;
  border: none;
  background-color: #c1fb72;
  padding: 8px 0;
  
  text-decoration: none;
  text-align: center;
  color: #000000;

  font-size: 17px;
  font-weight: 600;
  cursor: pointer;

  &:hover{
    opacity: .8;
  }
`