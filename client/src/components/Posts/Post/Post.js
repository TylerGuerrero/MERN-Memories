import React from 'react'
import { useDispatch } from 'react-redux'
import { Card, CardActions, CardActionArea ,CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import { ThumbUpAlt, Delete, MoreHoriz } from '@material-ui/icons'
import moment from 'moment'

import useStyles from './styles'
import { deletePost } from '../../../redux/Post/actions/DeletePostAction'
import { likeCount } from '../../../redux/Post/actions/LikeCountAction'

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
                <div className={classes.overlay}>
                    <Typography varient="h6">{post.creator}</Typography>
                    <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                </div>
                <div className={classes.overlay2}>
                    <Button 
                    style={{color: 'white'}} 
                    size="small" 
                    onClick={() => {setCurrentId(post._id)}}>
                        <MoreHoriz fontSize="default" />
                    </Button>
                </div>
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">
                        {post.tags.map((tag) => {
                            return (
                                `#${tag} `
                            )
                        })}
                    </Typography>
                </div>
                <Typography className={classes.title} variant="h5" color="textSecondary" gutterBottom component="p">{post.title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => {dispatch(likeCount(post._id))}}>
                    <ThumbUpAlt fontSize="small"/>Like&nbsp;{post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => {dispatch(deletePost(post._id))}}>
                    <Delete fontSize="small"/>Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post
