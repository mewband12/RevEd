import { IconButton, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import React from 'react'

const useStyle = makeStyles({
    root: {

    },

})

const Account = ( props ) => {
    const login = true
    return (
        <div>
            {login ? (
                <IconButton to="Login">
                    <AccountBoxIcon fontSize='large'/>
                    <SettingsIcon fontSize='large' />
                </IconButton>
            ) : 
                <Typography>
                    Login
                </Typography>
            }
        </div>
    )
}

export default Account
