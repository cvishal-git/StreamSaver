'use client';

import React from 'react';
import { ButtonProps, Button as MuiButton } from '@mui/material';

export const Button = (props: ButtonProps) => {
  const { onClick, children, ...rest } = props;
  return (
    <MuiButton
      {...rest}
      variant="contained"
      sx={{
        backgroundColor: '#666',
        color: '#fff',
        height: '40px',
        borderRadius: '10px',
        padding: '0 20px',
        boxShadow: 'none',
        textTransform: 'none',
        '&:hover': {
          backgroundColor: '#888',
          boxShadow: 'none',
        },
      }}
    >
      {children}
    </MuiButton>
  );
};
