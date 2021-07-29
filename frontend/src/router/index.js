import Home from '../pages/Home';
import CekOngkir from '../pages/CekOngkir';

const router = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/cek-ongkir',
    component: CekOngkir,
    exact: true,
  }
];

export default router;
