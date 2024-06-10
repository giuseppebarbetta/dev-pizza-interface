import React from 'react';
import PropTypes from 'prop-types';
import * as C from './style';
import Orders from './Orders';
import ListProducts from './ListProducts';
import { SideMenuAdmin } from '../../components';
import { useLocation, useOutletContext } from 'react-router-dom';
import paths from '../../constants/path';

export function Admin() {
  const { isAdmin } = useOutletContext;
  const location = useLocation();
  const currentLocation = location.pathname;

  return (
    <C.Container>
      <SideMenuAdmin path={currentLocation} />
      <C.ContainerItems>
        {currentLocation === paths.Order && <Orders />}
        {currentLocation === paths.Products && <ListProducts />}
      </C.ContainerItems>
    </C.Container>
  );
}
