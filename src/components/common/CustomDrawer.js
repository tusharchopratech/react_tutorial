import React, { Component } from 'react'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

export default function CustomDrawer() {

    const navigate = useNavigate();
    const drawerWidth = 240;
   

    const itemNames = [
        ['Products', '/products'],
        ['Chat', '/chat'],
        ['Active Orders', '/active-orders'],
        ['Pending Orders', '/pending-orders'],
        ['Upload Record', '/upload-record'],
        ['User Management', '/user-management'],
        ['Seach Product', '/search-product'],
        
    ]

    const itemNames2 = [
        ['A', '/a'],
        ['B', '/b'],
        ['C', '/c-orders'],
    ]

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {itemNames.map((element, index) => (
                        <ListItem key={element[0]} disablePadding onClick={e => navigate(element[1])}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={element[0]} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}

