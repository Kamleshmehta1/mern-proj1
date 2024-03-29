import React, { useCallback, useMemo, useState } from 'react';
import SearchBar from '../FormComponents/SearchBar';
import MuiContainer from '../HOC/MuiContainer';
import FormProvider from '../FormComponents/FormProvider';
import { useForm } from 'react-hook-form';
import {
  useCreateChatMutation,
  useUserSearchQuery,
} from '../redux/actions/chatAction';
import { handleWithDebounce } from '../utils/handleWithDebounce';
import { Box, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

function Chats() {
  const [userData, setUserData] = useState({ email: '', name: '' });

  const methods = useForm({ defaultValues: { users: '' } });

  const profile = useSelector((state) => state?.profile?.profileInfo);

  const filter = useMemo(
    () => (userData?.email || userData?.name ? userData : ''),
    [userData]
  );

  const { data, refetch } = useUserSearchQuery(filter);
  const [createChat] = useCreateChatMutation();

  // useEffect(() => {
  //   console.log(profile);
  //   const init = async () => {
  //     const res = await createChat(profile);
  //     console.log(res);
  //   };
  //   init();
  // }, [createChat, profile]);

  const { handleSubmit } = methods;

  const onSearch = useCallback(async (data) => refetch(), [refetch]);

  const handleOnInput = handleWithDebounce((e) =>
    setUserData({ email: e.target.value, name: e.target.value })
  );

  const handleChange = useCallback(
    async (e, selectedUser) => {
      if (selectedUser?.length && profile?._id) {
        const firstId = profile?._id;
        const secondId = selectedUser?.[0]?._id;
        const res = await createChat({ firstId, secondId });
        console.log(res);
      }
    },
    [createChat, profile?._id]
  );

  return (
    <MuiContainer maxWidth="lg" sx={{ padding: '10px' }}>
      <MuiContainer maxWidth="sm" sx={{ padding: '10px' }}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSearch)}>
          <SearchBar
            name="users"
            label="Search users"
            options={data?.data || []}
            onInput={handleOnInput}
            filterWith="email"
            onChange={handleChange}
            placeholder=""
            renderOption={(props, option) => {
              const newProps = { ...props, key: props.id };
              return (
                <Stack
                  key={newProps.key}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box
                    style={{
                      flexGrow: 1,
                    }}
                    {...newProps}
                  >
                    <Typography>{`${option['name']} (${option['email']})`}</Typography>
                  </Box>
                </Stack>
              );
            }}
          />
        </FormProvider>
      </MuiContainer>
    </MuiContainer>
  );
}

export default Chats;
