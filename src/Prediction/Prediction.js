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


const Prediction = () => {
    const [expanded, setExpanded] = React.useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <Box>
            <Box sx={{ textAlign: "center", py: 15 }}>
                <Typography sx={{ fontSize: '42px', fontWeight: '600', my: 4 }}>
                    AutoML Prediction – Make effective business decisions
                </Typography>
                <Typography sx={{ pt: 10 }}>
                    AUTOML PREDICTION
                </Typography>
                <Typography sx={{ fontSize: '42px', fontWeight: '600', my: 4 }}>
                    Make effective business decisions
                </Typography>
                <Container maxWidth='sm'>
                    <Typography sx={{ color: "#555555", fontWeight: 600 }}>
                        Put your data to use by creating regression-based predictive models. Use the power of predictive analytics to make a sales forecast or predict revenue. Measure the campaign effectiveness or predict customer spend.
                    </Typography>
                </Container>
            </Box>
            <Box sx={{ backgroundImage: "linear-gradient(to bottom, #ccfffb, #d9feff, #eafdff, #f9fdff, #ffffff)" }}>
                <Container sx={{ py: 10 }}>
                    <Typography sx={{ fontSize: "24px", mb: 4 }}>USE CASES</Typography>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography>Forecast sales demand</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Predict sales demand for a product based on prior sales figures, weather and consumer sentiment. Optimize marketing and promotional campaign based on the predicted sales demand.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                            <Typography>Predict customer lifetime value</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Understand customer lifetime value to create effective marketing campaigns and optimize customer acquisition cost.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography>Detect anomalies for predictive maintenance</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Predict failures on equipment or IoT devices to allow planned interventions to reduce downtime and operating costs while improving quality of service.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography>Real-time forecasts to optimize logistics</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Improve fuel efficiency and reduce delivery times by optimizing routing of delivery traffic. Or reduce maintenance costs and fuel consumption by using on-board sensors data to forecast optimal driving behavior.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography>Avoid costly cancellations</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Predict congestion and weather related problems to reduce costly cancellations.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Container>
            </Box>
        </Box>
    )
}

export default Prediction