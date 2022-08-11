import React from 'react'
import { Box, Grid, Typography, Container, Stack, Button } from '@mui/material'
import Image from 'next/Image'
import { styled, alpha } from '@mui/material/styles';

const StyledButton = styled((props) => (
    <Button
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: '#EB9940 !important',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#EB9940 !important',
        color: '#fff',
    },
}
));
const Home = () => {
    return (
        <Box>
            <Box sx={{mb:5}}>
                <Grid container sx={{ mt: 10 }}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Container maxWidth='sm' sx={{ mt: 5 }}>
                            <Typography sx={{ fontSize: "36px", fontWeight: 600 }}>
                                Machine learning for everyone
                            </Typography>
                            <Typography sx={{ mt: 4 }}>
                                Build machine learning models at lightning speed with our automated machine learning (AutoML) platform. The no-code platform for everyone.
                            </Typography>
                            <StyledButton
                                variant="contained"
                                color="info"
                                sx={{
                                    borderRadius: 12,
                                    mt: 5,
                                    pt: 2,
                                    pb: 1.5,
                                    px: '8%',
                                    backgroundColor: "#7F265B",
                                }}
                            >
                                <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
                                    JOIN THE WAITLIST
                                </Typography>
                            </StyledButton>
                        </Container>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Image src='/home1.png' width={550} height={400} />
                    </Grid>
                </Grid>
            </Box>

            <Box>
                <div style={{ height: "120px", overflow: "hidden" }} >
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}>
                        <path d="M0.00,49.99 C199.99,18.67 275.75,70.97 515.15,37.42 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: "#EDF7FF" }}>
                        </path>
                    </svg>
                </div>
                <Grid container sx={{ backgroundImage: "linear-gradient(to bottom, #edf7ff, #f3f9ff, #f8faff, #fcfdff, #ffffff)" }}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Container maxWidth='sm' sx={{ mt: 5 }}>
                            <Typography sx={{ fontSize: "36px", fontWeight: 600 }}>
                                Build insights into your applications in hours, not weeks or months
                            </Typography>
                            <Typography sx={{ mt: 4 }}>
                                Deliver the insights your business wants with our automated machine learning platform. Fully automated and no complexity.
                            </Typography>
                        </Container>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Image src='/home2.png' width={550} height={400} />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Home