import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Album() {
return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <main>
        {/* Hero unit */}
        <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6,}}>
        <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" gutterBottom > Enter Customer Info </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Enter your First Name, Last Name and the contact information.  
            Please fill out the form bellow
            </Typography>
        </Container>
        </Box>
    </main>
    </ThemeProvider>
    );
}