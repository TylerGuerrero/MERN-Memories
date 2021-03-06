import React, { useState, useEffect } from 'react'
import { Grow, Grid, Container } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import useStyles from './styles'
import { getPosts } from '../../redux/Post/actions/FetchPostAction'

const Home = () => {
    const [currentId, setCurrentId] = useState(null)
    const classes = useStyles()
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(getPosts())
    }, [dispatch]) 

    return (
        <Grow in>
          <Container>
            <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={4}>
                <Posts setCurrentId={setCurrentId}/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
              </Grid>
            </Grid>
          </Container>
        </Grow>
    )
}

export default Home
