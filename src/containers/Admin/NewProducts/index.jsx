import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { apiDevPizza as api } from '../../../services/api';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import * as C from './styles';
import ReactSelect from 'react-select';

function NewProduct() {
  const [categories, setCategories] = useState([]);
  const [fileName, setFileName] = useState(null);
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');
      setCategories(data);
    }

    loadCategories();
  }, []);

  return (
    <C.Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <C.Label>Nome</C.Label>
        <C.Input
          type="text"
          {...register('name')}
          placeholder="Nome do produto..."
        />

        <C.Label>Preço</C.Label>
        <C.Input
          type="number"
          {...register('name')}
          placeholder="Preço do produto..."
        />

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
            onChange={(value) => {
              setFileName(value.target.files[0]?.name);
            }}
          />
        </C.LabelUpload>

        <Controller
          name="category_id"
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
        <C.ButtonStyle>Adicionar produto</C.ButtonStyle>
      </form>
    </C.Container>
  );
}

export default NewProduct;
