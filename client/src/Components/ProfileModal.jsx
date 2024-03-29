import { CardMedia, Stack, Typography } from '@mui/material';
import React, { useMemo } from 'react';

function ProfileModal({ data }) {
  const url = useMemo(
    () => data?.data?.profileImage,
    [data?.data?.profileImage]
  );

  return (
    <Stack spacing={1} flex={1} p={1}>
      <Typography variant="body2">
        <strong>Name:</strong> {data?.data?.name}
      </Typography>
      <Typography variant="body2">
        <strong>Email:</strong> {data?.data?.email}
      </Typography>
      <CardMedia component="img" height="194" image={url} alt="Paella dish" />
    </Stack>
  );
}

export default ProfileModal;
