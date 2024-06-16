import styled, {css} from "styled-components";
import { Button } from '../../../components/Button';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    background-color: #565656;
    border-radius: 10px;
    padding: 30px;
    margin-top: 35px;
  }
`

export const Label = styled.p`
  font-size: 14px;
  color: #ffffff;

  margin-top: 7px;

`

export const Input = styled.input`
  height: 40px;
  width: 100%;
  min-width: 280px;
  background-color: #ffffff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);

  border: none;
  border-radius: 5px;
  outline: none;

  padding-left: 10px;
  margin-bottom: 8px;

  ${({ type }) =>
    type === 'number' &&
    css`
      /* Chrome, Safari, Edge, Opera */
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      -moz-appearance: textfield;
  `}
`

export const LabelUpload = styled.label`
  cursor: pointer;
  color: #ffffff;

  display: flex;
  align-items: center;
  gap: 10px;

  border: 1px dashed #ffffff;
  border-radius: 5px;

  padding: 10px;
  margin: 17px 0 7px;

  input {
    display: none;
  }
`

export const ContainerInput = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  input {
    appearance: none;

    width: 17px;
    height: 17px;
    cursor: pointer;

    background-color: #ffffff;
    position: relative;

    border: 2px solid #000000;
    border-radius: 3px;

    &:checked {
      background-color: #c1fb72;
      border-color: #000000;
    }

    &:checked::after {
      content: '';
      position: absolute;
      top: 1px;
      left: 4px;
      width: 4px;
      height: 7px;
      border: solid #000000;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg)
    }
  }
`

export const ButtonStyle = styled(Button)`
  width: 100%;
  font-size: 35px;
  padding: 3px 0;

  margin-top: 20px;
`