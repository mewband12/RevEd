import { Typography, Box, Grid } from '@mui/material'
import React from 'react'

import { makeStyles } from "@material-ui/core/styles";

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import study from '../assets/study.png';

const useStyles = makeStyles({
    dark: {
    //   border: '1px solid black',
      padding: '2em'
    },
    img: {
        width: '70%',
        opacity: 0.1,
        paddingLeft: '5em'
    }
  });

const Footer = () => {
    const classes = useStyles();

    return (
        <div>
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} >
                <Grid container>
                    <Grid className={classes.dark} item xs={12} md={4}>
                        <img className={classes.img} src={study} alt=""/>
                    </Grid>
                    <Grid className={classes.dark} item xs={12} md={4}>
                    <Typography variant="h5" align="center" gutterBottom>
                    Reach Us via

                </Typography>
                <Grid container spacing={2} justifyContent="center" alignContent="center">
                    <Grid item xs={3}>
                        <FacebookIcon sx={{ fontSize: 40 }}/>
                    </Grid>
                    <Grid item xs={3}>
                        <InstagramIcon sx={{ fontSize: 40 }}/>
                    </Grid>
                    <Grid item xs={3}>
                        <TwitterIcon sx={{ fontSize: 40 }}/>
                    </Grid>
                    
                    
                </Grid>
                
                    </Grid>
                    <Grid className={classes.dark} item xs={12} md={4}>
                    <Typography variant="h6" align="right" gutterBottom>
                RevEd Co.
                </Typography>
                <Typography
                variant="subtitle1"
                align="right"
                color="text.secondary"
                >
                RevEd.contact@revEd.co.uk <br/>
                +66-2-222-5555 <br/>
                Thay Ekamai, Sukhumvit <br/>
                Bangkok, Thailand <br/>
                20200
                </Typography>
                    </Grid>
                </Grid>    
                
            </Box>
        </div>
    )
}

export default Footer
