import Logo from '../../assets/logo.png';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import * as C from './styles';

import { Button } from '../../components/Button';

export function Login() {
  const schema = yup
    .object({
      email: yup
        .string()
        .email('Insira um email válido ⚠️')
        .required('O email é obrigatório ⚠️'),
      password: yup
        .string()
        .min(6, 'Sua senha deve conter ao menos 6 dígitos ⚠️')
        .required('A senha é obrigatória ⚠️'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <C.Container>
      <C.LeftContainer>
        <img src={Logo} alt="black background" />
      </C.LeftContainer>
      <C.RightContainer>
        <C.BlurContainer>
          <C.Title>
            Olá, seja bem vindo ao <span>Dev Pizza!</span>
            <br />
            Acesse com <span>Login e Senha.</span>
          </C.Title>
          <C.Form onSubmit={handleSubmit(onSubmit)}>
            <C.InputContainer>
              <label>Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu nome"
                {...register('email')}
              />
              <p>{errors?.email?.message}</p>
            </C.InputContainer>
            <C.InputContainer>
              <label>Senha</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Digite seu melhor email"
                {...register('password')}
              />
              <p>{errors?.password?.message}</p>
            </C.InputContainer>
            <Button type="submit">Entrar</Button>
          </C.Form>
          <p>
            Não possui conta? <a>Clique aqui.</a>
          </p>
        </C.BlurContainer>
      </C.RightContainer>
    </C.Container>
  );
}
