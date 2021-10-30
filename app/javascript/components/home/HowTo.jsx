import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import undraw1 from '../../assets/undraw1.svg';
import undraw2 from '../../assets/undraw2.svg';
import undraw3 from '../../assets/undraw3.svg';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles, styled } from "@material-ui/core/styles";
// /Volumes/KongV2/Startup_RevEd/Dev/RevEd/app/

const theme = createTheme();

const useStyles = makeStyles({
  dark: {
    // margin: '2em 5em',
    padding: '2em 10em',
    backgroundColor: '#FFFFF',
    height: 400,
    display: 'flex',
    alignContent: 'center'
  },
  light: {
    // margin: '2em 5em',
    padding: '2em 10em',
    backgroundColor: '#CDCDCD',
    
    // height: 400,
    display: 'flex',
    alignContent: 'center'
  },
  container: {
    marginTop: 'auto',
    marginBottom: 'auto',
    // border: '1px solid black',
    display: 'flex',
    alignContent: 'center'
  },
  grid: {
    margin: 'auto'
  },
  img: {
    weight: '30%'
  }
});

const HowTo = () => {

  const classes = useStyles();

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <ThemeProvider theme={theme} >
      <section className={classes.light}>
      <Box className={classes.container} sx={{ flexGrow: 1 }}>
        <Grid 
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          >
          <Grid item xs={12} md={6}>
            <Typography variant="h4">
              1. Choose Your University
            </Typography>
            <Typography paragraph>
              We got a list of universities for you to choose where 
              You will be able to choose Universities 
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img className={classes.container} width="100%" height="100%" src={undraw1} alt="React Logo" />
          </Grid>
        </Grid>
      </Box>
      </section>
      <section className={classes.dark}>
      <Box className={classes.container} sx={{ flexGrow: 1 }}>
        <Grid 
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          >
          <Grid className={classes.container} item xs={12} md={4}>
          <img className={classes.img} width="100%" height="100%" src={undraw2} alt="React Logo" />
          </Grid>
          <Grid item xs={12} md={8}>
          <Typography variant="h4">
              2. Choose Your Department
            </Typography>
            <Typography paragraph>
              We got a list of universities for you to choose where 
              You will be able to choose Universities 
            </Typography>
          </Grid>
        </Grid>
      </Box>
      </section>
      <section section className={classes.light}>
      <Box 
        className={classes.container} 
        sx={{ flexGrow: 1 }}
        >
      <Grid 
          container 
          spacing={2}
          justifyContent="center"
          alignItems="center"
          >
          <Grid item xs={12} md={6}>
            <Typography variant="h4">
              3. Choose Module
            </Typography>
            <Typography paragraph>
              Get your module's review and you can even
               participate on writing a review here also!
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img className={classes.img} width="100%" height="100%" src={undraw3} alt="React Logo" />
          </Grid>
        </Grid>
      </Box>
      </section>
        
    </ThemeProvider>
  );
}

export default HowTo