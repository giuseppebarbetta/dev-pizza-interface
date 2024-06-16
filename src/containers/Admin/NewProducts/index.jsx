import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { apiDevPizza as api } from '../../../services/api';
import { ErrorMessage } from '../../../components';
import { yupResolver } from '@hookform/resolvers/yup';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import * as C from './styles';
import * as Yup from 'yup';
import ReactSelect from 'react-select';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function NewProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço do produto'),
    category: Yup.object().required('Selecione uma categoria'),
    file: Yup.mixed()
      .test('required', 'Carregue um arquivo', (value) => {
        return value && value.length > 0;
      })
      .test('fileSize', 'Carregue um arquivo com até 2Mb', (value) => {
        return value && value[0]?.size <= 2000000;
      }),
  });

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const productDataFormData = new FormData();

    productDataFormData.append('name', data.name);
    productDataFormData.append('price', data.price);
    productDataFormData.append('category_id', data.category.id);
    productDataFormData.append('file', data.file[0]);

    await toast.promise(api.post('products', productDataFormData), {
      pending: 'Criando um novo produto...',
      success: 'Produto cadastrado com sucesso!',
      error: 'Falha ao criar produto, tente novamente.',
    });

    setInterval(() => {
      navigate('/listar-produtos');
    }, 2000);
  };

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');
      setCategories(data);
    }

    loadCategories();
  }, []);

  return (
    <C.Container>
      <h1>Adicionar novo produto</h1>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <C.Label>Nome</C.Label>
        <C.Input
          type="text"
          {...register('name')}
          placeholder="Nome do produto..."
        />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>

        <C.Label>Preço</C.Label>
        <C.Input
          type="number"
          {...register('price')}
          placeholder="Preço do produto..."
        />
        <ErrorMessage>{errors.price?.message}</ErrorMessage>

        <C.LabelUpload>
          {fileName || (
            <>
              <DriveFolderUploadIcon />
              Upload da imagem do produto
            </>
          )}
          <input
            type="file"
            accept="image/png, image/jpeg"
            {...register('file')}
            onChange={(event) => {
              const file = Array.from(event.target.files);
              setFileName(file[0]?.name);
              setValue('file', file);
            }}
          />
        </C.LabelUpload>
        <ErrorMessage style={{ marginBottom: 17 }}>
          {errors.file?.message}
        </ErrorMessage>

        <Controller
          name="category"
          control={control}
          render={({ field }) => {
            return (
              <ReactSelect
                {...field}
                options={categories}
                getOptionLabel={(categorie) => categorie.name}
                getOptionValue={(categorie) => categorie.id}
                placeholder="Categoria"
              />
            );
          }}
        ></Controller>
        <ErrorMessage style={{ marginTop: 7 }}>
          {errors.category?.message}
        </ErrorMessage>

        <C.ButtonStyle>Adicionar produto</C.ButtonStyle>
      </form>
    </C.Container>
  );
}

export default NewProduct;
