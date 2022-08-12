import React from 'react'
import { Box, Container, Menu, MenuItem, Typography, Button, AppBar, Toolbar, IconButton, Grid, Divider } from '@mui/material';
import ProductsDrop from './ProductsDrop';
import ResourcesDrop from './ResourcesDrop';
import AmpleLogo from '../../assets/AmpleLogo.svg'
import Image from 'next/Image'
const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1,height:"auto",p:2, }}>
            <AppBar elevation={0} position="static" sx={{ backgroundColor: "#fff" }}>
                <Toolbar>
                    <Image src={AmpleLogo} alt="ampleLogo" width='80rem' height='80rem'/>
                    <Typography sx={{ flexGrow: 1,fontSize:'28px',fontWeight:600, color: "#000" }}>
                        Ample AI
                    </Typography>
                    <ProductsDrop/>
                    
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar