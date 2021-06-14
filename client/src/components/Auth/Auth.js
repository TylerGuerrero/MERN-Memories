import React from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'
import useStyles from './styles'

import Input from './Input'

const Auth = () => {
    const state = null
    const isSignUp = false
    const classes = useStyles()

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleChange = (e) => {

    }


    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography variant="h5">
                    {isSignUp ? 'Sign Up' : 'Sign In'}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignUp && (
                        <React.Fragment>
                            <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus xs={6}/>
                            <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus xs={6}/>
                        </React.Fragment>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                        <Input name="password" label="Password" handleChange={handleChange} type="password"/>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
