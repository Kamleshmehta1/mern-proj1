import React, { createContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initialize } from '../redux/slice/authSlice';
import { getCookie } from '../utils/handleCookie';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const dispatch = useDispatch();

  const authSliceData = useSelector((state) => state?.authContext);

  const profile = useSelector((state) => state?.profile?.profileInfo);

  useEffect(() => {
    const isAdmin = profile?.isAdmin;
    const accessToken = getCookie('accessToken');
    const refreshToken = getCookie('refreshToken');
    if (accessToken || refreshToken) {
      dispatch(initialize({ isAuthenticated: true, isAdmin }));
    } else {
      dispatch(initialize({ isAuthenticated: false, isAdmin: false }));
    }
  }, [dispatch, profile]);

  return (
    <AuthContext.Provider value={{ ...authSliceData }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
