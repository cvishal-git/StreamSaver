'use client';

import React from 'react';
import { TextField } from '@mui/material';

export const Input = ({ placeholder }: { placeholder: string }) => {
  return (
    <TextField
      fullWidth
      placeholder={placeholder}
      variant="outlined"
      sx={{
        borderRadius: '20px',
        marginRight: '15px',
        '& .MuiOutlinedInput-root': {
          borderRadius: '20px',
          height: '50px',
          paddingLeft: '15px',
        },
      }}
    />
  );
};
