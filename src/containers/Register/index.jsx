import LogoDevPizza from '../../assets/logoDevPizza.png';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import * as C from './styles';

import { Button } from '../../components/Button';
import { apiDevPizza } from '../../services/api';

// Validação dos dados de login com YUP
export function Register() {
  const schema = yup
    .object({
      name: yup.string().required('O seu nome é obrigatório ⚠️'),
      email: yup
        .string()
        .email('Insira um email válido ⚠️')
        .required('O email é obrigatório ⚠️'),
      password: yup
        .string()
        .min(6, 'Sua senha deve conter ao menos 6 dígitos ⚠️')
        .required('A senha é obrigatória ⚠️'),
      confirmPassword: yup
        .string()
        .required('A senha é obrigatória ⚠️')
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
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
  //Passando os dados para o backend
  const onSubmit = async (loginData) => {
    const response = await apiDevPizza.post('users', {
      name: loginData.name,
      email: loginData.email,
      password: loginData.password,
    });

    console.log(response);
  };

  return (
    <C.Container>
      <C.BlurContainer>
        <C.LeftContainer></C.LeftContainer>
        <C.RightContainer>
          <img src={LogoDevPizza} alt="logo Dev Pizza text" />
          <C.Title>Cadastre-se</C.Title>
          <C.Form onSubmit={handleSubmit(onSubmit)}>
            <C.InputContainer>
              <label>Nome</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Digite seu nome"
                {...register('name')}
              />
              <p>{errors?.name?.message}</p>
            </C.InputContainer>

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

            <C.InputContainer>
              <label>Confirmar Senha</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="* * * * * *"
                {...register('confirmPassword')}
              />
              <p>{errors?.confirmPassword?.message}</p>
            </C.InputContainer>

            <Button type="submit">Cadastrar</Button>
          </C.Form>
          <p>
            Possui conta? <a>Sign in.</a>
          </p>
        </C.RightContainer>
      </C.BlurContainer>
    </C.Container>
  );
}
