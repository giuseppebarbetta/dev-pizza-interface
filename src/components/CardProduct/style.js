import styled from "styled-components";

export const Container = styled.div`
  background-color: #efefef;
  display: flex;
  gap: 8px;
  padding: 16px;
  border-radius: 15px;
  width: max-content;
`

export const Image = styled.img`
  width: 162px;
  height: 150px;
  border-radius: 8px;
`

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ProductName = styled.p`
  font-size: 16px;
  line-height: 19px;
`

export const ProductPrice = styled.p`
  font-size: 18px;
  line-height: 21px;
  font-weight: 500;
`