import React from 'react'
import { Typography, Box, Container } from '@mui/material'

const Aboutus = () => {
    return (
        <Box>
            <Box sx={{ textAlign: "center", }}>
                <Typography sx={{ fontSize: "34px", fontWeight: '600',my:20 }}>
                    About us – AutoML Platform of the Future
                </Typography>
            </Box>
            <Box>
                <Container>
                    <Typography sx={{ fontSize: "20px", fontWeight: '500',mb:2 }}>
                        About Ample AI
                    </Typography>
                    <Typography sx={{ fontSize: "34px", fontWeight: '600',mb:5 }}>
                        A platform for the future of data
                    </Typography>
                    <Typography>
                        <Typography sx={{mb:4}}>
                            Our mission at Ample AI is to make machine learning and artificial intelligence (ML/AI) accessible to everyone. When we say everyone, we mean everyone. Technical skills gap, identifying use cases, operational complexity and business agility are just some of the reasons for low ML/AI adoption in the enterprises. Nearly 38,000 job openings exists requiring machine learning skills. Nearly 50% of the companies adopting ML models are spending between 8 and 90 days deploying a model.
                        </Typography>
                        <Typography sx={{mb:4}}>
                            Whether you’re business user, marketing whiz, revenue operations star, business analyst, data analyst, data engineer, software developer, data scientist, data science practitioner or IT operator, the Ample AI AutoML platform makes it easy for you to build and deploy production ready machine learning models.
                        </Typography>
                        <Typography sx={{mb:4}}>
                            The market dynamics of widespread cloud and SaaS adoption, digital-first strategy and automation has generated unprecedented demand for cloud-based software tools and platform. Data science and machine learning is no exception to that trend. Further boosting the demand is the no-code/low-code movement to application development and automation.
                        </Typography>
                        <Typography sx={{mb:4}}>
                            Enter Ample AI. We have set out to create a no-code automated machine learning platform that anyone can use to build data insights for the entire business using machine learning. No longer you need deep technical knowledge to get value from your data.
                        </Typography>
                        <Typography sx={{mb:4}}>
                            Our platform lets you create custom machine learning models to build predictive applications. We strongly believe machine learning can drive real impact from data across the business functions. Come join us in accelerating your journey to automated and digital-first business.
                        </Typography>
                    </Typography>
                </Container>
            </Box>
        </Box>
    )
}

export default Aboutus