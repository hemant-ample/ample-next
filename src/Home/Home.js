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
            <Box sx={{ mb: 5 }}>
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

            <Box>
                <div style={{ height: "100px", overflow: "hidden" }} >
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}>
                        <path d="M-4.79,108.05 C154.90,93.25 332.67,77.47 503.67,60.68 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: "#FCF8F0" }}>
                        </path>
                    </svg>
                </div>
                <Grid container sx={{ backgroundImage: "linear-gradient(to bottom, #fcf8f0, #fff9f5, #fffafb, #fffdfe, #ffffff)" }}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Container maxWidth='sm'>
                            <Image src='/home3.png' width={550} height={400} />
                        </Container>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Container maxWidth='sm' sx={{ mt: 5 }}>
                            <Typography sx={{ fontSize: "36px", fontWeight: 600 }}>
                                Your business is unique, so should be your machine learning models
                            </Typography>
                            <Typography sx={{ mt: 4 }}>
                                Build custom models that is unique to your business. Our no-code platform means less work for developers. Building and pushing custom models to production got a lot easier.
                            </Typography>
                        </Container>
                    </Grid>
                </Grid>
            </Box>

            <Box>
                <div style={{ height: "120px", overflow: "hidden" }} >
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}>
                        <path d="M-3.67,64.63 C108.63,22.20 352.99,144.57 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: "#FCF5FB" }}>
                        </path>
                    </svg>
                </div>
                <Grid container sx={{ backgroundImage: "linear-gradient(to bottom, #fcf5fb, #fcf8fd, #fcfafe, #fdfdff, #ffffff)" }}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Container maxWidth='sm' sx={{ mt: 5 }}>
                            <Typography sx={{ fontSize: "36px", fontWeight: 600 }}>
                                Deliver more to business. Faster.
                            </Typography>
                            <Typography sx={{ mt: 4 }}>
                                We make machine learning less daunting, so you can say yes more. Ship faster and smarter to business.
                            </Typography>
                        </Container>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Image src='/home4.png' width={550} height={400} />
                    </Grid>
                </Grid>
            </Box>

            <Box>
                <div style={{ height: "100px", overflow: "hidden" }} >
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}>
                        <path d="M-3.67,64.63 C163.93,106.08 346.78,107.07 500.27,60.68 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: "#EFFFFA" }}>
                        </path>
                    </svg>
                </div>
                <Grid container sx={{ backgroundImage: "linear-gradient(to bottom, #effffa, #f2ffff, #f7feff, #fcfeff, #ffffff)" }}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Container maxWidth='sm'>
                            <Image src='/home5.png' width={550} height={400} />
                        </Container>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Container maxWidth='sm' sx={{ mt: 5 }}>
                            <Typography sx={{ fontSize: "36px", fontWeight: 600 }}>
                                Make everyone a data scientist
                            </Typography>
                            <Typography sx={{ mt: 4 }}>
                                No-code machine learning platform so easy anyone can build a machine learning model. Data analysts, data engineers, software engineers, business analysts, application users and data scientists – one platform for all. No coding required.
                            </Typography>
                        </Container>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ mt: 10 }}>
                <Grid container sx={{ backgroundColor: "#ffffff" }}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Container maxWidth='sm' sx={{ mt: 10 }}>
                            <Typography sx={{ fontSize: "36px", fontWeight: 600 }}>
                                Experiment away
                            </Typography>
                            <Typography sx={{ mt: 4 }}>
                                Create the high performing machine learning model easily and cost effectively.
                            </Typography>
                        </Container>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Image src='/home6.png' width={550} height={400} />
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ mt: 10,  backgroundImage: "linear-gradient(to bottom, #f2eff6, #f5f3f8, #f8f7fb, #fbfbfd, #ffffff)" }}>
                <div style={{ height: "100px", overflow: "hidden" }} >
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}>
                        <path d="M-3.67,64.63 C128.95,35.02 332.67,70.55 502.54,52.78 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: "#F2EFF6" }}>
                        </path>
                    </svg>
                </div>
                <Container maxWidth='lg'>
                    <Typography sx={{ fontSize: '30px' }}>
                        Why Ample AI
                    </Typography>
                    <Typography sx={{ fontSize: '36px', fontWeight: '600' }}>
                        Deliver insights to business without constraints
                    </Typography>
                    <Grid container rowSpacing={5} columnSpacing={5} sx={{ mt: 2 }}>
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                            <Image src='/logo/logo1.png' width={'60px'} height={'60px'} />
                            <Typography sx={{ mt: 3, fontSize: '20px', fontWeight: '600' }}>
                                No-Code
                            </Typography>
                            <Typography sx={{ mt: 2, fontSize: '16px', fontWeight: '500' }}>
                                First no code automated machine learning platform. Build high performing models without writing code.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                            <Image src='/logo/logo2.png' width={'60px'} height={'60px'} />
                            <Typography sx={{ mt: 3, fontSize: '20px', fontWeight: '600' }}>
                                More Personas
                            </Typography>
                            <Typography sx={{ mt: 2, fontSize: '16px', fontWeight: '500' }}>
                                One platform for everyone in the team. Turn their ideas into production ready insights.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                            <Image src='/logo/logo3.png' width={'60px'} height={'60px'} />
                            <Typography sx={{ mt: 3, fontSize: '20px', fontWeight: '600' }}>
                                Instant Deployment
                            </Typography>
                            <Typography sx={{ mt: 2, fontSize: '16px', fontWeight: '500' }}>
                                Increase business IQ by delivering insights faster with one click instant deployment of your custom machine learning models.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                            <Image src='/logo/logo4.png' width={'60px'} height={'60px'} />
                            <Typography sx={{ mt: 3, fontSize: '20px', fontWeight: '600' }}>
                                Easy Experimentation
                            </Typography>
                            <Typography sx={{ mt: 2, fontSize: '16px', fontWeight: '500' }}>
                                Save time and effort in creating the best performing model. Easily experiment and train quickly to arrive at the optimal model performance.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                            <Image src='/logo/logo5.png' width={'60px'} height={'60px'} />
                            <Typography sx={{ mt: 3, fontSize: '20px', fontWeight: '600' }}>
                                Zero DevOps
                            </Typography>
                            <Typography sx={{ mt: 2, fontSize: '16px', fontWeight: '500' }}>
                                You don’t have to worry about one more cost overhead. Our cloud-native platform needs zero DevOps, it’s that simple.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                            <Image src='/logo/logo6.png' width={'60px'} height={'60px'} />
                            <Typography sx={{ mt: 3, fontSize: '20px', fontWeight: '600' }}>
                                Data Security
                            </Typography>
                            <Typography sx={{ mt: 2, fontSize: '16px', fontWeight: '500' }}>
                                Your data to train and test the machine learning models is secure. Data is stored encrypted at rest and in transit.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </Box>
    )
}

export default Home