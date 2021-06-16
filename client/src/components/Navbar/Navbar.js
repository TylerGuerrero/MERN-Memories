import React, { useState, useEffect } from 'react'
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import useStyles from './styles'
import memories from '../../images/memories.png'
import { logOut } from '../../redux/Auth/actions/LogoutActions'

const Navbar = () => {
    const classes = useStyles()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    const logout = () => {
        dispatch(logOut())
        history.push("/")
        setUser(null)    
    }

    useEffect(() => {
        //const token = user?.token
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location.pathname])

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="icon" height="60"/>
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.profile.name} src={user.profile.imageUrl}>
                            {user.profile.name.charAt(0)}
                        </Avatar>
                        <Typography variant="h6" className={classes.userName}>
                            {user.profile.name}
                        </Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>
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
