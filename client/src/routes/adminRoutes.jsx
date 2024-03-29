import { useRoutes } from 'react-router-dom';
import { AUTHORIZED_PATHS } from './paths';
import AdminHome from '../Components/Admin';

export default function Routes() {
  return useRoutes([
    {
      path: AUTHORIZED_PATHS.HOME.path,
      element: <AdminHome />,
    },
  ]);
}
