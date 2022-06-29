import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Grid from "@mui/material/Grid"
import Paper from '@mui/material/Paper';
 import { styled } from '@mui/material/styles';
import { LogoDev } from '@mui/icons-material';

import { Container, List, ListItemButton, ListItemText } from '@mui/material';
import CustomizedList from './CustomizedList';
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="">
        ChrisDev
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
// rgba(0, 0, 0, 0.87)
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function StickyFooter() {
  return (
    
    <Grid container rowSpacing={1} sx={{backgroundColor: "rgba(0, 0, 0, 0.87)",  py: 3, px: 2, mt: 'auto',}} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 0.1 }}>
      <Grid item lg={3} md={12} xs={12}>
        <Container className="widget widget-logo">
          <Container className="logo-footer" id="logo-footer">
            <Container className="logo-footer" id="logo-footer">
              <p className="sub-widget-logo">Feel Free to Browse around at anything you like! </p>
               <CustomizedList />
            </Container>
          </Container>
        </Container>
  </Grid>
      <Grid item lg={3} md={6} xs={6}>
        <Container className="widget widget-menu style-1">
          <h4 className="title-widget">Most Recent</h4>
          <List>
              <ListItemButton component="a" href="#">
            <ListItemText primary="RECENT WORK 2022" /> 
          </ListItemButton>
          <ListItemButton component="a" href="#">
            <ListItemText primary="PROJECTS 2021-2022" /> 
          </ListItemButton>
          <ListItemButton component="a" href="#">
            <ListItemText primary="CONTRIBUTION" /> 
          </ListItemButton>
          </List>
        
      </Container>

    {/* <Item>xs=4</Item> */}
  </Grid>
      <Grid item lg={3} md={6}  xs={6}>
        {/* <Item>xs=4</Item> */}
         <Container className="widget widget-menu style-1">
           <h4 className="title-widget">Resources</h4> 
          <List> 
          <ListItemButton component="a" href="#">
            <ListItemText primary="Past WORK 2022" /> 
          </ListItemButton>
          <ListItemButton component="a" href="#">
            <ListItemText primary="Old PROJECTS" /> 
          </ListItemButton>
          <ListItemButton component="a" href="#">
            <ListItemText primary="CONTRIBUTION" /> 
          </ListItemButton>
          </List>
      </Container>
  </Grid>
      <Grid item lg={3} md={12} xs={12}>
               <Container className="widget widget-menu style-1">
           <h4 className="title-widget">Resources</h4> 
          <List> 
          <ListItemButton component="a" href="#">
            <ListItemText primary="Past WORK 2022" /> 
          </ListItemButton>
          <ListItemButton component="a" href="#">
            <ListItemText primary="Old PROJECTS" /> 
          </ListItemButton>
          <ListItemButton component="a" href="#">
            <ListItemText primary="CONTRIBUTION" /> 
          </ListItemButton>
          </List>
      </Container>
        
      </Grid>
      <Grid item lg={12} md={12} xs={12}>
        <Copyright /> 
      </Grid>
    </Grid>
    
  );
}


// <Box
    //   sx={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     mt: 5
    //   }}
    // >
    //   <CssBaseline />
    //   <Box
    //     component="footer"
    //     sx={{
    //       py: 18,
    //       px: 2,
    //       mt: 'auto',
    //       backgroundColor: (theme) =>
    //         theme.palette.mode === 'light'
    //           ? theme.palette.grey[200]
    //           : theme.palette.grey[800],
    //     }}
    //   >
    //     <Container maxWidth="sm">
    //       <Typography variant="body1">
    //      {"  Styled Components  with MaterialUI<💅🏽 /> "}
    //       </Typography>
    //       <Copyright />
    //     </Container>
    //   </Box>
    // </Box>