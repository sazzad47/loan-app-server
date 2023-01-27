import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            fontWeight: '700',
                            border: '1px solid white',
                            p: 0.5,
                            borderRadius: 1,
                        }}
                    >
                        Generate Letter
                    </Typography>

                    <Button variant="text" sx={{ color: '#f0f0f0', ml: 2 }}>
                        Users
                    </Button>
                    <Button variant="text" sx={{ color: '#f0f0f0', ml: 2 }}>
                        Disputes
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;
