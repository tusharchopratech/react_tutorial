import React from 'react'
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

export default function CustomAppBar() {

const navigate = useNavigate();
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <div style={{ flex: '1', display: 'flex', flexDirection: 'row' }}>
            <div style={{ flex: '1', alignItems: 'center' }}>
              <Typography variant="h6" noWrap component="div" align="center">
                Curefy / Sourc.
              </Typography>
            </div>
            <Button variant="" onClick={e => navigate("/logout")} >Logout</Button>
          </div>
        </Toolbar>
      </AppBar>
  )
}


