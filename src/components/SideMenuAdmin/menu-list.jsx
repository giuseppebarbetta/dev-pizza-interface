import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import paths from '../../constants/path';

const listLinks = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.Order,
    icon: ShoppingBagIcon,
  },
  {
    id: 2,
    label: 'Listar produtos',
    link: paths.Products,
    icon: LocalGroceryStoreIcon,
  },
  {
    id: 3,
    label: 'Novo produto',
    link: paths.newProduct,
    icon: AddShoppingCartIcon,
  },
];

export default listLinks;
