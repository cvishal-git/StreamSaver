// src/app/page.tsx
'use client';

import Button from '@mui/material/Button';

export default function HomePage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to StreamSaver</h1>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </div>
  );
}
