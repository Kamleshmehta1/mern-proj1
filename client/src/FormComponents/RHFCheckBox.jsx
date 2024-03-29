import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';

import { Controller, useFormContext } from 'react-hook-form';

function RHFCheckBox({ name, disabled, ...other }) {
  const { control } = useFormContext();

  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Checkbox
              disabled={disabled}
              {...field}
              checked={Boolean(field?.value)}
            />
          )}
        />
      }
      {...other}
    />
  );
}

export default RHFCheckBox;
