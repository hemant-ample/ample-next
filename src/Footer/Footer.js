import React from 'react'
import { Box, Grid, Container, Typography, Stack } from '@mui/material'
import AmpleLogo from '../../assets/AmpleLogo.svg'
import Image from 'next/Image'
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    const products = ['AutoML Prediction - Make effective business decisions', 'AutoML Classification', 'AutoML Clustering - Gain deep insights about your customers', 'Why Ample AI'];
    const resources = ['Documentation', 'Blog', 'Email us']
    const company = ['About us', 'Terms', 'Privacy', 'Cookie Policy']
    return (
        <Box sx={{}}>
            <Box sx={{ width: "100%", height: "75vh", display: "flex", alignItems: "center", }}>
                <Grid container sx={{}} spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
                        <Container sx={{ width: "80%" }}>
                            <Image src={AmpleLogo} alt="ampleLogo" width='80rem' height='80rem' />
                            <Typography sx={{ fontSize: '13px', fontWeight: "600" }}>
                                The simple no code automated machine learning platform for everyone.
                            </Typography>

                        </Container>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                                <Typography sx={{ fontSize: '16px', fontWeight: "600" }}>
                                    Product
                                </Typography>
                                <Stack spacing={3} sx={{ mt: 3 }}>
                                    {
                                        products.map(prod => (
                                            <Typography sx={{ fontSize: '13px', fontWeight: "600" }} key={prod}>{prod}</Typography>
                                        ))
                                    }
                                </Stack>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                                <Typography sx={{ fontSize: '18px', fontWeight: "600" }}>
                                    Resources
                                </Typography>
                                <Stack spacing={3} sx={{ mt: 3 }}>
                                    {
                                        resources.map(res => (
                                            <Typography sx={{ fontSize: '13px', fontWeight: "600" }} key={res}>{res}</Typography>
                                        ))
                                    }
                                </Stack>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                                <Typography sx={{ fontSize: '18px', fontWeight: "600" }}>
                                    Company
                                </Typography>
                                <Stack spacing={3} sx={{ mt: 3 }}>
                                    {
                                        company.map(comp => (
                                            <Typography sx={{ fontSize: '13px', fontWeight: "600" }} key={comp}>{comp}</Typography>
                                        ))
                                    }
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>

            <Typography align='center' sx={{ fontStyle: 'italic', color: "#888", fontSize: '12px' }}>
                <CopyrightIcon sx={{ fontSize: "14px" }} /> 2022 Ample AI. All rights reserved.
            </Typography>

        </Box>
    )
}

export default Footer