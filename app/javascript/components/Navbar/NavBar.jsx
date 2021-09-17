import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Account from './Account';

import { makeStyles } from '@mui/styles';
import { Avatar, Paper, Grid } from '@mui/material';

import MenuBar from './Menu'



const useStyle = makeStyles({
    root : {
        height: '13em',
        position: 'sticky',
    }, 
    grid: {
        marginTop: '8em'
    },
    paper: {
        padding: '2px 4px',
        width: '70%',
        marginLeft: '7em',
        boxShadow: 'none'
    }, 
    avatar: {
        margin: 'auto'
        // top: '-10px'
    }
})
const NavBar = () => {
    const classes = useStyle();

    return (
        <div>
            {/* <Box> */}
            <AppBar position='fixed' style={{backgroundColor: '#9E9E9E'}} className={classes.root}>
                <Toolbar>
                    <Grid className={classes.grid} container>
                        <Grid item sm="4">
                        <Paper className={classes.paper} >
                            <Typography display="inline" variant="subtitle1" >University of Warwick</Typography>
                            <Typography display="inline" variant="subtitle2">, Computer Science</Typography>
                        </Paper>
                        </Grid>
                        <Grid item sm="4">
                            <Avatar sx={{ width: 130, height: 130 }} className={classes.avatar}>RevED</Avatar>
                        </Grid>
                        <Grid item sm="4">
                            <Account />
                        </Grid>
                    
                    </Grid>
                </Toolbar>
                <MenuBar />
            </AppBar>
            {/* </Box> */}
        </div>
    )
}

export default NavBar
