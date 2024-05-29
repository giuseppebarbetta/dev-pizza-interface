import styled from "styled-components";

export const Container = styled.main`
  height: 72px;
  background-color: #ffffff;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const ContainerLeft = styled.div`
  display: flex;
  gap: 17px;
`

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const Line = styled.div`
    height: 40px;
    border: 0.5px solid #bababa;
`

export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #555555;
  font-size: 16px;
  line-height: 19px;

  img {
    width: 22px;
  }
`

export const ContainerText = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  color: #555555;

  .exit {
    font-weight: bold;
    font-size: 15px;
    line-height: 17px;

    color: #c1fb72;
    -webkit-text-stroke: .8px #000000;
  }
`
