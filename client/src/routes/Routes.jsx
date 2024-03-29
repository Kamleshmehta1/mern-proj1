import { Navigate, useRoutes } from 'react-router-dom';
import {
  ADMIN_ROOT_PATH,
  AUTHORIZED_PATHS,
  ROOTS_PATH,
  UNAUTHORIZE_PATH,
} from './paths';
import { Loadable } from '../utils/RouteLazyLoading';
import { lazy } from 'react';
import UserRoutes from './userRoutes';
import AdminRoutes from './adminRoutes';

const UnAuthGuard = Loadable(lazy(() => import('../Auth/UnAuthGuard')));
const Login = Loadable(lazy(() => import('../Auth/Login')));
const Signup = Loadable(lazy(() => import('../Auth/Signup')));
const WithoutCredentials = Loadable(
  lazy(() => import('../Auth/WithoutCredentials'))
);
const Layout = Loadable(lazy(() => import('../Auth/Layout')));

const AuthGuard = Loadable(lazy(() => import('../Auth/AuthGuard')));
const MainLayout = Loadable(lazy(() => import('../Components/MainLayout')));
const RoleBaseGuard = Loadable(lazy(() => import('../HOC/RoleBaseGuard')));

export default function Routes() {
  return useRoutes([
    {
      path: ROOTS_PATH,
      element: (
        <UnAuthGuard>
          <Layout />
        </UnAuthGuard>
      ),
      children: [
        {
          path: UNAUTHORIZE_PATH.SIGN_IN.path,
          element: (
            <WithoutCredentials>
              <Login />
            </WithoutCredentials>
          ),
        },
        {
          path: UNAUTHORIZE_PATH.SIGN_UP.path,
          element: (
            <WithoutCredentials>
              <Signup />
            </WithoutCredentials>
          ),
        },
        {
          path: '',
          element: <Navigate to={UNAUTHORIZE_PATH.SIGN_IN.fullPath} replace />,
        },
      ],
    },
    {
      path: ROOTS_PATH,
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: AUTHORIZED_PATHS.root + '/*',
          element: (
            <RoleBaseGuard>
              <UserRoutes />
            </RoleBaseGuard>
          ),
        },
        {
          path: ADMIN_ROOT_PATH + '/*',
          element: (
            <RoleBaseGuard>
              <AdminRoutes />
            </RoleBaseGuard>
          ),
        },
      ],
    },
  ]);
}
