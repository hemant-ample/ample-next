import React from 'react'
import { Box, Container, Typography, TextField,TextareaAutosize  } from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
const StyledTextField = styled((props) => (
    <TextField
        {...props}
    />
))(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: '1px solid #E5E5E5',
            borderRadius:0
        },
        '&.Mui-focused fieldset': {
            borderColor: '#E40088',
        },
    },
}));

const Contactus = () => {
    return (
        <Box>
            <Container>
                <Typography>
                    Contact us
                </Typography>
                <Typography>
                    Send us your feedback
                </Typography>
                <Typography>
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
                        mb:1
                    }}
                >
                    Message
                </Typography>
                <TextareaAutosize
                    minRows={8}
                    style={{width:"100%",border: '1px solid #E5E5E5',borderRadius:0}}
                />

            </Container>
        </Box>
    )
}

export default Contactus