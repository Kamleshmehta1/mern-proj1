import React, { forwardRef } from 'react';
import {
  Dialog,
  DialogTitle,
  IconButton,
  Slide,
  Stack,
  Typography,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function ModalWrapper({
  handleClose,
  open,
  children,
  title,
  sx,
  titleStyle,
  clearIcon = true,
  isLoading,
  ...other
}) {
  return (
    <Dialog open={open} TransitionComponent={Transition} sx={sx} {...other}>
      <DialogTitle
        variant="h5"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignSelf: !title ? 'end' : '',
          alignItems: 'center',
          padding: 0,
          pl: 1,
          ...titleStyle,
        }}
      >
        <Stack direction={'row'} spacing={2} alignItems={'center'}>
          <Typography variant="h5">{title}</Typography>
        </Stack>
        {clearIcon ? (
          <IconButton onClick={handleClose} disabled={isLoading}>
            <ClearIcon sx={{ cursor: 'pointer' }} />
          </IconButton>
        ) : null}
      </DialogTitle>
      {children}
    </Dialog>
  );
}

export default ModalWrapper;
