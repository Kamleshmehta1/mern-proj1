import React, { memo, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import FormProvider from '../FormComponents/FormProvider';
import { Stack, Typography } from '@mui/material';
import RHFTextField from '../FormComponents/RHFTextField';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import * as Yup from 'yup';
import { AUTHORIZED_PATHS, UNAUTHORIZE_PATH } from '../routes/paths';
import { useSignInMutation } from '../redux/actions/authAction';
import RHFButton from '../FormComponents/RHFButton';
import { enqueueSnackbar } from 'notistack';
import { initialize } from '../redux/slice/authSlice';
import { useDispatch } from 'react-redux';
import MuiContainer from '../HOC/MuiContainer';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [localLoader, setLocalLoader] = useState(false);
  const [guestLoader, setGuestLoader] = useState(false);

  const [signIn, { isLoading }] = useSignInMutation();

  const methods = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(
      Yup.object().shape({
        email: Yup.string().email().required('Email is required'),
        password: Yup.string().required('Password is required'),
      })
    ),
    defaultValues: { email: '', password: '' },
  });

  const { handleSubmit } = methods;

  const handleClick = () => {
    navigate(UNAUTHORIZE_PATH.SIGN_UP.fullPath);
  };

  const handleLogin = useCallback(
    async (data) => {
      setLocalLoader(true);
      const res = await signIn(data);
      setLocalLoader(false);

      if (res?.data?.status === 200) {
        dispatch(initialize({ isAuthenticated: true }));
        navigate(AUTHORIZED_PATHS.HOME.fullPath);
        enqueueSnackbar('Login successfully!', { variant: 'success' });
      }
    },
    [dispatch, navigate, signIn]
  );

  const handleGuestLogin = useCallback(async () => {
    const data = { email: 'guest@gmail.com', password: '12345678' };

    setGuestLoader(true);
    const bool = await signIn(data);
    setGuestLoader(false);

    if (bool) {
      dispatch(initialize({ isAuthenticated: true }));
      navigate(AUTHORIZED_PATHS.HOME.fullPath);
      enqueueSnackbar('Login successfully as guest!', { variant: 'success' });
    }
  }, [dispatch, navigate, signIn]);

  return (
    <MuiContainer maxWidth="sm" sx={{ padding: '10px' }}>
      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        Login Form
      </Typography>
      <FormProvider onSubmit={handleSubmit(handleLogin)} methods={methods}>
        <Stack spacing={2}>
          <RHFTextField name="email" label="Email" />
          <RHFTextField name="password" label="Password" />
          <RHFButton
            variant="contained"
            type="submit"
            isLoading={isLoading && localLoader}
            disabled={isLoading || localLoader || guestLoader}
            title="Login"
          />
          <RHFButton
            variant="contained"
            onClick={handleGuestLogin}
            isLoading={isLoading && guestLoader}
            disabled={isLoading}
            title="Login as guest"
          />
          <RHFButton
            sx={{ textAlign: 'center' }}
            variant="text"
            onClick={handleClick}
            disabled={isLoading}
            title="Create a new account"
          />
        </Stack>
      </FormProvider>
    </MuiContainer>
  );
}

export default memo(Login);
