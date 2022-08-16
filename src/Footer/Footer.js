import React from 'react'
import { Box, Grid, Container, Typography, Stack } from '@mui/material'
import AmpleLogo from '../../assets/AmpleLogo.svg'
import Image from 'next/Image'
import CopyrightIcon from '@mui/icons-material/Copyright';
import Link from 'next/Link'
const Footer = () => {
    const products = [
        {
            text: 'AutoML Prediction - Make effective business decisions',
            link: '/prediction'
        },
        {
            text: 'AutoML Classification',
            link: '/classification'
        },
        {
            text: 'AutoML Clustering - Gain deep insights about your customers',
            link: '/clustering'
        },
        {
            text: 'Why Ample AI',
            link: '/#'
        },
        {
            text: 'How it works',
            link: '/#'
        },
    ];

    const resources = [
        {
            text: 'Documentation',
            link: '/#'
        },
        {
            text: 'Blog',
            link: '/#'
        },
        {
            text: 'Email.us',
            link: '/#'
        }
    ]
    const company = [
        {
            text: 'About us',
            link: '/about'
        },
        {
            text: 'Terms',
            link: '/terms'
        },
        {
            text: 'Privacy',
            link: '/privacy'
        },
        {
            text: 'Cookie Policy',
            link: '/cookie_policy'
        }
    ]
    return (
        <Box sx={{}}>
            <Box sx={{ width: "100%", height: "80vh", display: "flex", alignItems: "center", }}>
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
                                            <Link href={prod.link} key={prod.text}>
                                                <Typography sx={{ fontSize: '13px', fontWeight: "600",cursor:'pointer' }}>{prod.text}</Typography>
                                            </Link>
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
                                            <Link href={res.link} key={res.text}>
                                                <Typography sx={{ fontSize: '13px', fontWeight: "600",cursor:'pointer' }}>{res.text}</Typography>
                                            </Link>))
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
                                            <Link href={comp.link} key={comp.text}>
                                                <Typography sx={{ fontSize: '13px', fontWeight: "600",cursor:'pointer' }}>{comp.text}</Typography>
                                            </Link>))
                                    }
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>

            <Typography align='center' sx={{ fontStyle: 'italic', color: "#888", fontSize: '12px', mb: 8, mt: 2 }}>
                <CopyrightIcon sx={{ fontSize: "14px" }} /> 2022 Ample AI. All rights reserved.
            </Typography>

        </Box>
    )
}

export default Footer