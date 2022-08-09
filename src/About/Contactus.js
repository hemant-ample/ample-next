import React from 'react'
import { Box, Container, Typography, TextField, TextareaAutosize, Button } from '@mui/material'
import { styled, alpha } from '@mui/material/styles';

const StyledButton =styled((props) => (
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

const Contactus = () => {
    return (
        <Box sx={{backgroundColor:'#FFFDEC'}}>
            <Container maxWidth='md' sx={{ py: 5 }}>
                <Typography sx={{ fontSize: '22px', fontWeight: '400', mb: 4 }}>
                    Contact us
                </Typography>
                <Typography sx={{ fontSize: '26px', fontWeight: '600', mb: 2 }}>
                    Send us your feedback
                </Typography>
                <Typography sx={{ fontSize: '14px', fontWeight: '500', mb: 3 }}>
                    Send us a message at team@ample.ai or fill out the form below.
                </Typography>
                <Typography
                    sx={{
                        fontSize: '14px',
                        fontWeight: 600,
                    }}
                >
                    Full name
                </Typography>
                <StyledTextField
                    margin='dense'
                    required
                    fullWidth
                    id="name"
                    name="name"
                    type='text'
                    sx={{ backgroundColor: '#ffffff' }}

                />
                <Typography
                    sx={{
                        fontSize: '14px',
                        fontWeight: 600,
                        mt: '3%'
                    }}
                >
                    Business email
                </Typography>
                <StyledTextField
                    margin='dense'
                    id="email"
                    name="email"
                    type='email'
                    fullWidth
                    sx={{ backgroundColor: '#ffffff' }}
                />
                <Typography
                    sx={{
                        fontSize: '14px',
                        fontWeight: 600,
                        mt: '3%',
                        mb: 1
                    }}
                >
                    Message
                </Typography>
                <TextareaAutosize
                    minRows={8}
                    style={{ 
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
                        mt: 5,
                        pt: 2,
                        pb:1.5,
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
                        SUBMIT
                    </Typography>
                </StyledButton>
            </Container>
        </Box>
    )
}

export default Contactus