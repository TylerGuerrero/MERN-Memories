import React from 'react'
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import memories from '../../images/memories.png'

const Navbar = () => {
    const classes = useStyles()
    const user = null

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="icon" height="60"/>
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.url}>
                            {user.result.name.charAt(0)}
                        </Avatar>
                        <Typography variant="h6" className={classes.userName}>
                            {user.result.name}
                        </Typography>
                        <Button variant="contained" className={classes.logout} color="secondary">
                            Logout
                        </Button>
                    </div>  
                ) : (<div>
                        <Button variant="contained" color="secondary" component={Link} to="/auth">
                            Sign-Up
                        </Button>
                </div>)}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
