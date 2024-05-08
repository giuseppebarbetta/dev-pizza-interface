import styled from 'styled-components';

export const ContainerButton = styled.button`
  width: 100%;
  height: 53px;
  background-color: #c1fb72;

  border: none;
  border-radius: 8px;

  font-size: 40px;
  font-family: 'Road Rage', sans-serif;
  color: #000000;

  margin-bottom: 26px;

  &:hover {
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='black' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='36' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 8px;
  }
`;
