import styled from 'styled-components';
import BackgroundLogin from '../../assets/backgroundLogin.png';
import BackgroundForm from '../../assets/backgroundForm.jpg';

export const Container = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const LeftContainer = styled.div`
  width: 50%;
  height: 100%;

  background: url('${BackgroundLogin}');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 620px;
  }
`;

export const RightContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: url('${BackgroundForm}');
  background-position: left;
  background-size: cover;

  p {
    color: #ffffff;
    font-size: 17px;
    font-weight: 800;

    a {
      color: #ffffff;
      text-decoration: underline;
      cursor: pointer;
      transition: 0.3s ease;

      &:hover {
        color: #c1fb72;
      }
    }
  }
`;

export const BlurContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgba(99, 99, 99, 0.8);
  padding: 26px;

  width: fit-content;
  height: 100%;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 62px;
  line-height: 50px;
  color: #ffffff;
  margin-bottom: 35px;
  font-family: 'Road Rage', sans-serif;
  font-weight: 400;
  font-style: normal;

  span {
    font-family: 'Road Rage', sans-serif;
    color: #c1fb72;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 100%;
  max-width: 400px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 100%;
  font-size: 26px;

  input {
    width: 100%;
    height: 53px;
    border: none;
    border-radius: 8px;
    padding: 0 17px;
    font-size: 17px;
  }

  label {
    line-height: 20px;
    font-weight: 600;
    color: #ffffff;
  }

  p {
    font-size: 14px;
    line-height: 80%;
    color: #cf3057;
    font-weight: 600;
    height: 10px;
    padding-left: 8px;
  }
`;
