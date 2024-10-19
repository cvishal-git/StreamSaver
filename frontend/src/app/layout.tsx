'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import Link from 'next/link';
import Head from 'next/head'; // Import for adding <head> content
import '../styles/global.css'; // Global styles

const Navbar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: 'transparent', // Transparent to merge with the background
        color: '#333',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Light shadow
        padding: '10px 0',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between', // Space between logo and nav links
          alignItems: 'center',
        }}
      >
        {/* Logo to the left */}
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '24px' }}>
          StreamSaver
        </Typography>

        {/* Navigation Links Centered */}
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 3,
          }}
        >
          <Button
            component={Link}
            href="/"
            sx={{ color: '#333', textTransform: 'capitalize' }}
          >
            Youtube
          </Button>
          <Button
            component={Link}
            href="/about"
            disabled
            sx={{ color: '#aaa', textTransform: 'capitalize' }}
          >
            Facebook
          </Button>
          <Button
            component={Link}
            href="/about"
            disabled
            sx={{ color: '#aaa', textTransform: 'capitalize' }}
          >
            Instagram
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* Head content */}
        <title>StreamSaver</title>
        <meta
          name="description"
          content="Download and manage your streams easily"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body style={{ margin: 0 }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
