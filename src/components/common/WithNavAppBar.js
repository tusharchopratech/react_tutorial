import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import CustomDrawer from './CustomDrawer';
import CustomAppBar from './CustomAppBar';
import React from 'react';

export const WithNavAppBar = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <CustomAppBar/>
        <CustomDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3  }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
    );
};
