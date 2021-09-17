import { Button, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyle = makeStyles({
    container: {
        // border: '2px solid black',
        padding: '1em',
        display: 'flex',
        marginTop: '6em',
        backgroundColor: '#9E9E9E',
        borderRadius: '10px'
    },
    menu: {
        // border: '2px solid black',
        padding: '5px'
    },
    button: {
        boxShadow: 'none',
        width: '170px',
        height: '55px',
        backgroundColor: 'white',
        color: 'black'
    }
})

const MenuBar = () => {
    const classes = useStyle()
    return (
        <div>
            <Grid container justifyContent="center">
                <div className={classes.container} >
                <Grid className={classes.menu} item>
                    <Button className={classes.button} color="secondary" variant="contained">Menu1</Button>
                </Grid>
                <Grid className={classes.menu} item>
                    <Button className={classes.button} variant="contained" color="secondary">Menu1</Button>
                </Grid>
                <Grid className={classes.menu} item>
                    <Button className={classes.button} variant="contained" color="secondary">Menu1</Button>
                </Grid>
                <Grid className={classes.menu}item>
                    <Button className={classes.button} variant="contained" color="secondary">Menu1</Button>
                </Grid>
                </div>
            </Grid>
        </div>
    )
}

export default MenuBar
