import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const cards = [1, 2, 3];

const theme = createTheme();

export default function CardAlbum() {
return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
        <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
            {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} >
                <CardMedia component="img" sx={{ 16:9}} image="https://source.unsplash.com/random/portrait?business?women" alt="random" />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Customer Contact
                    </Typography>
                    <Typography>
                    Full Name: Sarah Leed  
                    </Typography>
                    <Typography>
                    Email: sarahleed@outlook.com
                    </Typography>
                    <Typography>
                    Phone Number: (949)385-9321
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium" variant="contained" color="error" fullWidth>Delete</Button>
                </CardActions>
                </Card>
            </Grid>
            ))}
            </Grid>
        </Container>
    </ThemeProvider>
    );
}