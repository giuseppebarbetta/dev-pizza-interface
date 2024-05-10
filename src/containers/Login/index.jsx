import Logo from '../../assets/logo.png';
//animação da validação ou erro nos acessos
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import * as C from './styles';

import { Button } from '../../components/Button';
import { apiDevPizza } from '../../services/api';

// Validação dos dados de login com YUP
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

  // Hook Form para cadastro
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (loginData) => {
    const response = await toast.promise(
      apiDevPizza.post('sessions', {
        email: loginData.email,
        password: loginData.password,
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Bem vindo de volta 👌',
        error: 'Verifique seu email e senha..',
      },
    );

    console.log(response);
  };

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
                placeholder="Digite seu melhor email"
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
                placeholder="* * * * * *"
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
