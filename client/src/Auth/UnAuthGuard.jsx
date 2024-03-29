import { Navigate } from 'react-router-dom';
import useAuth from './useAuth';
import { AUTHORIZED_PATHS } from '../routes/paths';

function UnAuthGuard({ children }) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={AUTHORIZED_PATHS.HOME.fullPath} />;
  }

  return <>{children}</>;
}

export default UnAuthGuard;
