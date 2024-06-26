import React, { useEffect, useState } from 'react';
import { apiDevPizza as api } from '../../../services/api';
import * as C from './style';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Row from './row';
import formatDate from '../../../utils/formatDate';
import Status from './OrderStatus';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [activeStatus, setActiveStatus] = useState(1);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('orders');

      setOrders(data);
      setFilteredOrders(data);
    }

    loadOrders();
  }, []);

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: formatDate(order.createdAt),
      status: order.status,
      products: order.products,
    };
  }

  useEffect(() => {
    const newRows = filteredOrders.map((order) => createData(order));
    setRows(newRows);
  }, [filteredOrders]);

  useEffect(() => {
    if (activeStatus === 1) {
      setFilteredOrders(orders);
    } else {
      const statusIndex = Status.findIndex(
        (status) => status.id === activeStatus,
      );
      const newFilteredOrders = orders.filter(
        (order) => order.status === Status[statusIndex].value,
      );
      setFilteredOrders(newFilteredOrders);
    }
  }, [orders]);

  function handleStatus(status) {
    if (status.id === 1) {
      setFilteredOrders(orders);
    } else {
      const newOrders = orders.filter((order) => order.status === status.value);
      setFilteredOrders(newOrders);
    }
    setActiveStatus(status.id);
  }

  return (
    <C.Container>
      <C.Menu>
        {Status &&
          Status.map((status) => (
            <C.LinkMenu
              key={status.id}
              onClick={() => handleStatus(status)}
              className={activeStatus === status.id ? 'active' : ''}
            >
              {status.label}
            </C.LinkMenu>
          ))}
      </C.Menu>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row
                key={row.orderId}
                row={row}
                setOrders={setOrders}
                orders={orders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </C.Container>
  );
}

export default Orders;
