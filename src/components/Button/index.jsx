import PropTypes from 'prop-types';
import * as C from './style';

export function Button({ children, ...props }) {
  return <C.ContainerButton {...props}>{children}</C.ContainerButton>;
}

Button.propTypes = {
  children: PropTypes.string,
};
