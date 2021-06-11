import React, { useEffect } from 'react'
import { Typography, AppBar, Grow, Grid, Container } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'

import memories from './images/memories.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles'
import { FETCH_ALL } from './redux/Post/Type'

const App = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  
  useEffect(() => {

  }, [])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="memories" height="60"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={4}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App
