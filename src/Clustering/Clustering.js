import React from 'react'
import { Typography, Box, Container, } from '@mui/material'
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<KeyboardArrowDownIcon sx={{ fontSize: '1.2rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    padding: theme.spacing(1),
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(180deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(5),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const Clustering = () => {
    const [expanded, setExpanded] = React.useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <Box>
            <Box sx={{ textAlign: "center", py: 15 }}>

                <Typography sx={{ fontSize: '42px', fontWeight: '600', my: 4 }}>
                    AutoML Clustering – Gain deep insights about your customers
                </Typography>

                <Typography sx={{ pt: 10 }}>
                    AUTOML CLUSTERING
                </Typography>
                <Typography sx={{ fontSize: '42px', fontWeight: '600', my: 4 }}>
                    Gain deep insights about your customers
                </Typography>
                <Container maxWidth='sm'>
                    <Typography sx={{ color: "#555555", fontWeight: 600 }}>
                        Segment customers or perform marketing analytics. Perform document analysis or group IT alerts. Deeply understand your customers by identifying hidden patterns.
                    </Typography>
                </Container>

            </Box>
            <Box sx={{ backgroundImage: "linear-gradient(to bottom, #f9deea, #f8e7f3, #f8eff9, #faf7fd, #ffffff);" }}>
                <Container sx={{ py: 10 }}>
                    <Typography sx={{ fontSize: "24px", mb: 4 }}>USE CASES</Typography>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography>Customer segmentation</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Perform customer segmentation to drive personalized marketing campaign.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                            <Typography>Fraud detection</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Identify fraud based on historical data on fraudulent claims.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography>Fast track your supervised learning</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Pre-process your data to predict the label to create the training data for regression and classification based supervised learning models.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography>Identify similar patients</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Explore treatments and outcomes based on similar patients.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography>Discover anomalies in data</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Optimize your data collection pipeline by discovering anomalous data.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Container>
            </Box>
        </Box>
    )
}

export default Clustering