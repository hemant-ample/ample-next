import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
    typography: {
        fontFamily: ['"Spartan"', 'Sans-serif'].join(','),
        fontStyle: 'normal',
        button: {
            textTransform: "none"
        }
    }
});

export default theme;