import React from 'react'
import { Box, Grid, Typography, Container, TextField, TextareaAutosize, Stack, Button, Tabs, Tab } from '@mui/material'
import Image from 'next/Image'
import { styled, alpha } from '@mui/material/styles';
import { withStyles, makeStyles } from '@mui/styles'
import Link from 'next/Link'

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
const StyledTextField = styled((props) => (
    <TextField
        {...props}
    />
))(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: '2px solid #E5E5E5',
            borderRadius: 0
        },
        '&.Mui-focused fieldset': {
            borderColor: '#E40088',
        },
    },
}));
const Styles = theme => ({
    customStyleOnTab: {
        color: "#000",
        alignItems: 'start',
        textAlign: 'start',
    },
    customStyleOnActiveTab: {
        alignItems: 'start',
        textAlign: 'start',

    },
    activeTab: {
        color: '#000',
        alignItems: 'start',
        textAlign: 'start',
        boxShadow: 'inset 0 0 0 3px #68D9CF'
    }
})

const tabDetails = [
    {
        title: 'Explore',
        description: 'Bring your tabular data to create high performing models. Exploration enables you to discover the patterns in the data using commonly used data science techniques. View the data types of your tabular data, get the counts, uniques, and frequency for numeric and categorical columns. Analyze the summary statistics to ensure its representative and well distributed to reduce bias.',
    },
    {
        title: 'Transform',
        description: 'Automatically curate data using many transformation functions of the Ample AI platform. Add and drop columns and row in your tabular data. Change data type or remove empty values. Greatly speed up preparing quality data set for the next step – training.',
    },
    {
        title: 'Train',
        description: 'Skip the time consuming feature engineering, algorithm selection and hyperparameter tuning. Create a high performing model with the automated feature selection and hyperparameter tuning. Our ensemble training selects the best model based on performance metrics.',
    },
    {
        title: 'Evaluate',
        description: 'Review the comprehensive performance metrics generated from the test data. It’s the simplest way to evaluate the performance of the model with the data not seen before by the model. ',
    },
    {
        title: 'Deploy',
        description: 'Deploy the model to production with one click deployment. The deployment automatically generates a REST API for the model. Integrate the model output with your applications using the REST API. Generating insights for your business is now whole lot easier.',
    },
    {
        title: 'Manage',
        description: 'Maintain and manage the model with model lifecycle. Easily create new versions of the model using new or existing training data. ',
    },

]
const Home = (props) => {
    const [selectedTab, setSelectedTab] = React.useState(0);
    const { classes } = props;
    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    }
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

            <Box sx={{ mt: 10, backgroundImage: "linear-gradient(to bottom, #f2eff6, #f5f3f8, #f8f7fb, #fbfbfd, #ffffff)" }}>
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
            <Box sx={{ mt: 20, minHeight: "100vh", }}>
                <Container>
                    <Typography sx={{ fontSize: '30px', fontWeight: '400' }}>
                        How It Works
                    </Typography>
                    <Typography sx={{ fontSize: '40px', fontWeight: '600' }}>
                        Fully automated machine learning. Just bring your tabular data.
                    </Typography>

                    <Box sx={{ width: "100%", height: "auto" }}>
                        <Box sx={{ float: 'left', width: '20%', borderRight: "1px solid", height: "100%", justify: 'flex-start' }}>

                            <Tabs value={selectedTab} orientation='vertical'
                                onChange={handleTabChange}
                                classes={{ indicator: classes.customStyleOnActiveTab }}
                                indicatorColor={'#fff'}

                            >
                                {
                                    tabDetails.map(tab => (
                                        < Tab
                                            key={tab.title}
                                            disableRipple
                                            sx={{ my: 2 }}
                                            className={selectedTab === tabDetails.indexOf(tab) ? classes.activeTab : classes.customStyleOnTab}
                                            label={
                                                <Box>
                                                    <Typography>
                                                        {tab.title}
                                                    </Typography>
                                                </Box>
                                            }
                                        />
                                    ))
                                }
                            </Tabs>

                        </Box>
                        <Box sx={{ float: 'right', width: '80%', height: "100%", p: 4 }}>
                            <Typography>
                                {tabDetails[selectedTab].description}
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Box sx={{ mt: 10, width: '100%', backgroundImage: "linear-gradient(to bottom, #F7FBFE, #f9fcfe, #fbfcfe, #fdfdfe, #fefefe)" }}>
                <Container sx={{ pt: 10, }}>
                    <Typography sx={{ fontSize: '30px', fontWeight: '400' }}>
                        How It Works
                    </Typography>
                    <Typography sx={{ fontSize: '40px', fontWeight: '600' }}>
                        Fully automated machine learning. Just bring your tabular data.
                    </Typography>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                                <Image src='/home7.png' width={'300px'} height={'200px'} />
                            </Box>
                            <Link href='/prediction' style={{ textDecoration: 'none', }}>
                                <Typography align='center' sx={{ fontSize: "20px", mt: 3, cursor: 'pointer' }}>
                                    AUTOML <b>PREDICTION</b>
                                </Typography>
                            </Link>
                            <Typography align='center' sx={{ fontSize: "18px", mt: 3 }}>
                                Use the power of predictive analytics to make a sales forecast or predict customer lifetime value. Put your data to work with machine learning to make smarter business decisions.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                                <Image src='/home8.png' width={'300px'} height={'200px'} />
                            </Box>
                            <Link href='/classification' style={{ textDecoration: 'none', }}>
                                <Typography align='center' sx={{ fontSize: "20px", mt: 3, cursor: 'pointer' }}>
                                    AUTOML <b>CLASSIFICATION</b>
                                </Typography>
                            </Link>
                            <Typography align='center' sx={{ fontSize: "18px", mt: 3 }}>
                                Enable efficient data-driven decision making in your business processes and customer experience. Auto-categorize financial transactions or predict likelihood of product purchase, anticipate customer needs to deliver what your customers expect.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                                <Image src='/home9.png' width={'300px'} height={'200px'} />
                            </Box>
                            <Link href='/clustering' style={{ textDecoration: 'none', }}>
                                <Typography align='center' sx={{ fontSize: "20px", mt: 3, cursor: 'pointer' }}>
                                    AUTOML <b>CLUSTERING</b>
                                </Typography>
                            </Link>
                            <Typography align='center' sx={{ fontSize: "18px", mt: 3 }}>
                                Create targeted marketing campaign or recommend the best offer. Gain deep understanding about your customers to enhance customer experience, discover opportunities and retain customers.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ mt: 10, backgroundColor: '#F3F3FF' }}>
                <Container sx={{ pt: 10, }}>
                    <Typography sx={{ fontSize: '30px', fontWeight: '400' }}>
                        Join Waitlist
                    </Typography>
                    <Typography sx={{ fontSize: '40px', fontWeight: '600' }}>
                        Chart the future of data with us
                    </Typography>

                    <StyledTextField
                        margin='dense'
                        id="email"
                        name="email"
                        type='email'
                        fullWidth
                        placeholder='Enter your email...'
                        sx={{ backgroundColor: '#ffffff', mt: 5 }}
                    />

                    <TextareaAutosize
                        minRows={8}
                        placeholder="Send us a note..."
                        style={{
                            marginTop: '30px',
                            width: "100%",
                            border: '2px solid #E5E5E5',
                            borderRadius: 0,
                            '&:hover': {
                                border: '2px solid #E5E5E5',
                                borderRadius: 0,
                            },
                            '&:focus': {
                                border: '2px solid #E40088',
                                borderRadius: 0,
                            }
                        }}
                    />
                    <StyledButton
                        variant="contained"
                        color="info"
                        sx={{
                            borderRadius: 12,
                            my: 4,
                            pt: 2,
                            pb: 1.5,
                            px: '5%',
                            backgroundColor: "#7F265B",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 14,
                                fontWeight: 600
                            }}
                        >
                            JOIN THE WAITLIST
                        </Typography>
                    </StyledButton>
                </Container>
            </Box>

        </Box >


    )
}

export default withStyles(Styles, { withTheme: true })(Home);