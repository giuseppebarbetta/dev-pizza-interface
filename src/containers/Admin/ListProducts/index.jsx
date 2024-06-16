import React, { useEffect, useState } from 'react';
import { apiDevPizza as api } from '../../../services/api';
import formatCurrency from '../../../utils/formatCurrency';
import * as C from './styles';

import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import paths from '../../../constants/path';

function ListProducts() {
  const [products, setProducts] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('products');

      setProducts(data);
    }

    loadProducts();
  }, []);

  function isOffer(offerStatus) {
    if (offerStatus) {
      return <CheckCircleIcon style={{ color: 'c1fb72' }} />;
    }
    return <CancelIcon style={{ color: 'cc1717' }} />;
  }

  function editProduct(product) {
    navigate(paths.EditProduct, { state: { product } });
  }

  return (
    <C.Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Produto</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell align="center">Em oferta</TableCell>
              <TableCell>Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>
                    <img
                      src={product.url}
                      alt="imagem do produto"
                      style={{ width: 62, height: 62, borderRadius: 8 }}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell>{formatCurrency(product.price)}</TableCell>
                  <TableCell align="center">{isOffer(product.offer)}</TableCell>
                  <TableCell>
                    <C.Button onClick={() => editProduct(product)}>
                      {<EditIcon />}
                    </C.Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </C.Container>
  );
}

export default ListProducts;
