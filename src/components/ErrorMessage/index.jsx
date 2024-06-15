import React from 'react';
import * as C from './styles';

export function ErrorMessage({ children, style }) {
  return <C.ErrorMessageStyle style={style}>{children}</C.ErrorMessageStyle>;
}
