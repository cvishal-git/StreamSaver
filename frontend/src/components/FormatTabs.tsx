'use client';

import React from 'react';
import { Box, Tabs, Tab, Radio } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { Button } from './Button';

const mockFormats = [
  {
    id: '1',
    format: 'mp4',
    resolution: '1080p',
    size: '10MB',
    fps: '30',
    vcodec: 'H.264',
    acodec: 'AAC',
  },
  {
    id: '2',
    format: 'webm',
    resolution: '720p',
    size: '5MB',
    fps: '24',
    vcodec: 'VP9',
    acodec: 'Vorbis',
  },
  {
    id: '3',
    format: 'mp4',
    resolution: '480p',
    size: '3MB',
    fps: '30',
    vcodec: 'H.264',
    acodec: 'AAC',
  },
  {
    id: '4',
    format: 'mp4',
    resolution: '360p',
    size: '2MB',
    fps: '30',
    vcodec: 'H.264',
    acodec: 'AAC',
  },
  {
    id: '5',
    format: 'webm',
    resolution: '144p',
    size: '900KB',
    fps: null,
    vcodec: 'VP8',
    acodec: 'Vorbis',
  },
];

export const FormatTabs = ({
  tab,
  setTab,
  selectedFormat,
  setSelectedFormat,
  searchDone,
}: any) => {
  const handleFormatChange = (id: string) => {
    setSelectedFormat(id);
  };

  const filteredFormats = mockFormats.filter((format) => {
    if (tab === 0) return true;
    if (tab === 1) return format.format === 'mp4';
    return false;
  });

  const columns = [
    {
      field: 'select',
      headerName: '',
      width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <Radio
          checked={selectedFormat === params.row.id}
          onChange={() => handleFormatChange(params.row.id)}
        />
      ),
    },
    { field: 'format', headerName: 'Format', width: 100 },
    { field: 'resolution', headerName: 'Resolution', width: 120 },
    { field: 'size', headerName: 'Size', width: 100 },
    { field: 'fps', headerName: 'FPS', width: 100 },
    { field: 'vcodec', headerName: 'Video Codec', width: 150 },
    { field: 'acodec', headerName: 'Audio Codec', width: 150 },
  ];

  return (
    <Box sx={{ width: '100%' }}>
      {searchDone && (
        <>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '15px',
              width: '100%',
            }}
          >
            <Tabs
              value={tab}
              onChange={(e, newValue) => setTab(newValue)}
              sx={{
                marginBottom: '15px',
                fontSize: '12px',
                flexGrow: 1,
              }}
            >
              <Tab label="All" sx={{ fontSize: '14px', padding: '6px' }} />
              <Tab label="MP4" sx={{ fontSize: '14px', padding: '6px' }} />
            </Tabs>

            <Button children="Download" disabled={!selectedFormat} />
          </Box>

          <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={filteredFormats}
              columns={columns}
              autoPageSize={true}
              disableRowSelectionOnClick={true}
            />
          </Box>
        </>
      )}
    </Box>
  );
};
