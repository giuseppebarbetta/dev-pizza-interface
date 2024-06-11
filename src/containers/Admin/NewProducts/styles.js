import styled, {css} from "styled-components";
import { Button } from '../../../components/Button';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  form {
    background-color: #565656;
    border-radius: 10px;
    padding: 30px;
  }
`

export const Label = styled.p`
  font-size: 14px;
  color: #ffffff;

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

  margin-bottom: 26px;
  padding-left: 10px;

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
  margin-bottom: 26px;

  input {
    display: none;
  }
`

export const ButtonStyle = styled(Button)`
  width: 100%;
  height: 100%;
  font-size: 35px;
  padding: 3px 0;

  margin-top: 35px;
`