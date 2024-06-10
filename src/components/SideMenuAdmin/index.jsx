import React from 'react';
import PropTypes from 'prop-types';
import * as C from './style';
import { useUser } from '../../hooks/UserContext';

import listLinks from './menu-list';
import LogoutIcon from '@mui/icons-material/Logout';

export function SideMenuAdmin({ path }) {
  const { logout } = useUser();

  return (
    <C.Container>
      <div>
        <hr></hr>
        {listLinks.map((item) => (
          <C.ItemContainer
            key={item.id}
            className={path === item.link ? 'active' : ''}
          >
            <C.LinkList to={item.link}>
              <item.icon className="icon" />
              {item.label}
            </C.LinkList>
          </C.ItemContainer>
        ))}
        <hr></hr>
      </div>
      <C.ItemContainer>
        <C.LinkList to={'/login'} onClick={logout}>
          <LogoutIcon style={{ color: '#ffffff' }} />
          Sair
        </C.LinkList>
      </C.ItemContainer>
    </C.Container>
  );
}
