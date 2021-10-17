import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import undraw1 from '../../assets/undraw1.svg';
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
    backgroundColor: '#CDCDCD',
  },
  light: {
    // margin: '2em 5em',
    padding: '2em 10em',
    backgroundColor: '#FFFFF',
  },
  img: {
    weight: '100%'
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
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <Typography variant="h4">
              Step 1. Choose Your University
            </Typography>
            <Typography paragraph>
              We got a list of universities for you to choose where 
              You will be able to choose Universities 
            </Typography>
          </Grid>
          <Grid item xs={6} md={6}>
            <img src={undraw1} alt="React Logo" />
          </Grid>
        </Grid>
      </Box>
      </section>
      <section className={classes.dark}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Item>xs=6 md=8</Item>
          </Grid>
          <Grid item xs={6} md={8}>
            <Item>xs=6 md=4</Item>
          </Grid>
        </Grid>
      </Box>
      </section>
      <section section className={classes.light}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <Item>xs=6 md=8</Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>xs=6 md=4</Item>
          </Grid>
        </Grid>
      </Box>
      </section>
        
    </ThemeProvider>
  );
}

export default HowTo