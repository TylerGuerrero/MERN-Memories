import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import { GoogleLogin } from 'react-google-login'
import { LockOutlined } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import useStyles from './styles'
import Input from './Input'
import Icon from './Icon'
import { authSuccess, authError } from '../../redux/Auth/actions/AuthActions'

const Auth = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [isSignUp, setIsSignUp] = useState(false)
    // const [formInputs, setFormInputs] = useState({firstName: "", lastName: "", email: "", password: "", confirmPassword: ""})
    const dispatch = useDispatch()
    const classes = useStyles()
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {

    }

    const googleSuccess = async (res) => {
        console.log(res)
        const profile = res?.profileObj
        const token = res?.tokenId

        try {
            dispatch(authSuccess(profile, token))
            history.push("/")
        } catch (err) {
            console.log(err)
        }
    }

    const googleFailure = (error) => {
        console.log(error)
        dispatch(authError(error))
    }

    const handleShowPassword = () => {
        setShowPassword((prevState) => !prevState)
    }

    const switchChange = () => {
        setIsSignUp((prevState) => !prevState)
        setShowPassword((prevState) => !prevState)
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
                            <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus xs={6} half/>
                            <Input name="lastName" label="Last Name" handleChange={handleChange} autoFocus xs={6} half/>
                        </React.Fragment>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text": "password"} handleShowPassword={handleShowPassword}/>
                        {isSignUp && (<Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" handleShowPassword={handleShowPassword}/>)}
                    </Grid>
                    <Button className={classes.submit} variant="contained" color="primary" type="submit" fullWidth>
                        {isSignUp ? "Sign Up" : "Sign In"}
                    </Button>
                    <GoogleLogin 
                        clientId="1049555643312-ve67glsi05uhgsqtb77fil5buhq5j5cg.apps.googleusercontent.com" 
                        render={(renderProps) => (
                            <Button 
                            type="submit" 
                            variant="contained" 
                            color="primary" 
                            className={classes.googleButton} 
                            fullWidth 
                            onClick={renderProps.onClick} 
                            disabled={renderProps.disabled} 
                            startIcon={<Icon />}
                            >
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                        />
                    <Button onClick={switchChange}>
                            { isSignUp ? "Have a account already ?" : "Need to create a account ?"}
                    </Button>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
