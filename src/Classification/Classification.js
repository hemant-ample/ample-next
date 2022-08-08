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


const Classification = () => {
    const [expanded, setExpanded] = React.useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <Box>
            <Box sx={{ textAlign: "center", py: 15 }}>
                <Typography>
                    AUTOML CLASSIFICATION
                </Typography>
                <Typography sx={{ fontSize: '42px', fontWeight: '600', my: 4 }}>
                    Insights for efficient business processes
                </Typography>
                <Container maxWidth='sm'>
                    <Typography sx={{ color: "#555555", fontWeight: 600 }}>
                        Predict customer churn or detect fraud. Screen new job candidates or predict likelihood of attrition. Bring efficiency to your business processes by making data-driven decisions with classification-based models. Whether its revenue operations, human resources, IT or in-product decision, there’s something for everyone.
                    </Typography>
                </Container>
            </Box>
            <Box sx={{backgroundImage: "linear-gradient(to bottom, #ccfffb, #d9feff, #eafdff, #f9fdff, #ffffff)"}}>
                <Container sx={{py:10}}>
                    <Typography sx={{fontSize:"24px",mb:4}}>USE CASES</Typography>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography>Predictive lead scoring</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Qualify the best leads for your sales team. Use the power of machine learning to get lead score in real-time.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                            <Typography>Fraud detection</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Whether its financial transaction or insurance claim, identify fraudulent activity to mitigate risk and improve customer experience.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography>Customer churn prediction</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                There’s wealth of data on customers in your CRM, marketing and product usage tools. Make the most of it by predicting whether custom may churn. Take advantage of the prediction to plan customer outreach.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography>Automatically categorize financial transactions</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Improve customer financial well-being with predictive personal financial management by auto-categorizing customer financial transaction. Show spend analysis, opportunities to save and reduce debt, many ways to be a trusted partner in your customers financial journey.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography>Predict likelyhood of product purchase</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Increase revenue with instant promotion based on prediction of product purchase intent.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Container>
            </Box>
        </Box>
    )
}

export default Classification