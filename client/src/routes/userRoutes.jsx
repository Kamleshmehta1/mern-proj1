import { useRoutes } from 'react-router-dom';
import { AUTHORIZED_PATHS } from './paths';
import { Loadable } from '../utils/RouteLazyLoading';
import { lazy } from 'react';

const Home = Loadable(lazy(() => import('../Components/Home')));
const Products = Loadable(lazy(() => import('../Components/Products')));
const Chats = Loadable(lazy(() => import('../Chat/index')));

export default function Routes() {
  return useRoutes([
    {
      path: AUTHORIZED_PATHS.HOME.path,
      element: <Home />,
    },
    {
      path: AUTHORIZED_PATHS.products.path,
      element: <Products />,
    },
    {
      path: AUTHORIZED_PATHS.chat.path,
      element: <Chats />,
    },
  ]);
}
