'use client';

import React, { useState } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { Button, Input, FormatTabs } from '../components';

const HomePage = () => {
  const [tab, setTab] = useState(0);
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);
  const [searchDone, setSearchDone] = useState(false);

  const handleSearch = () => {
    setTimeout(() => {
      setSearchDone(true);
    }, 1000);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#f8f4ee',
        padding: '30px 250px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fff',
          borderRadius: '16px',
          boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.1)',
          minWidth: '700px',
          padding: '30px',
          alignItems: 'center',
        }}
      >
        <CardContent sx={{ textAlign: 'center', width: '100%' }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 500, marginBottom: '10px', fontSize: '28px' }}
          >
            Welcome to StreamSaver
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}
          >
            Save and manage your favorite videos effortlessly!
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              marginBottom: '15px',
            }}
          >
            <Input placeholder="Enter URL" />
            <Button onClick={handleSearch} children="Search" />
          </Box>

          <FormatTabs
            tab={tab}
            setTab={setTab}
            selectedFormat={selectedFormat}
            setSelectedFormat={setSelectedFormat}
            searchDone={searchDone}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default HomePage;
