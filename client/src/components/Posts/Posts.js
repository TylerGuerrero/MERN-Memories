import React from 'react'
import { useSelector } from 'react-redux'
import { CircularProgress, Grid } from '@material-ui/core'

import Post from './Post/Post'
import useStyles from './styles'

const Posts = ({ setCurrentId }) => {
    const classes = useStyles()
    const { loading, error, posts } = useSelector((state) => state.posts)

    return (
        <React.Fragment>
            { loading && <CircularProgress /> }
            { (posts && !loading) && 
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                { posts.map((post) => {
                    return (
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId}/>
                        </Grid>
                    )
                }) }
            </Grid> }
            { error && <p>There is a error</p> }
        </React.Fragment>
    )
}

export default Posts
