import React, { useState, useEffect } from 'react'
import { TextField, Typography, Paper, Button } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'

import useStyles from './styles'
import { createPost } from '../../redux/Post/actions/CreatePostAction'
import { updatePost } from '../../redux/Post/actions/UpdatePostAction'

const Form = ({ currentId, setCurrentId }) => {
    const [post, setPost] = useState({creator: "", title: "", message: "", tags: "", selectedFile: ""})
    const classes = useStyles()
    const dispatch = useDispatch()
    const currentPost = useSelector((state) => currentId ? state.posts.posts.find((p) => p._id === currentId) : null)

    useEffect(() => {
        if (currentPost) {
            setPost(currentPost)
        }

    }, [currentPost])
     
    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (currentId) {
            dispatch(updatePost(currentId, post))
        } else {
            dispatch(createPost(post))
        }

        setPost({creator: "", title: "", message: "", tags: "", selectedFile: ""})
        setCurrentId(null)
    }

    return (
        <Paper className={classes.paper}>
            <form autoCapitalize="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6"> {currentId ? "Editing" : "Creating"} a Memory </Typography>
                <TextField name="creator" variant="outlined" margin="normal" label="Creator" fullWidth required value={post.creator} onChange={(e) => setPost({...post, creator: e.target.value})} />
                <TextField name="title" variant="outlined" margin="normal" label="title" fullWidth required value={post.title} onChange={(e) => setPost({...post, title: e.target.value})} />
                <TextField name="message" variant="outlined" margin="normal" label="message" fullWidth required value={post.message} onChange={(e) => setPost({...post, message: e.target.value})} />
                <TextField name="tags" variant="outlined" margin="normal" label="tags" fullWidth required value={post.tags} onChange={(e) => setPost({...post, tags: e.target.value.split(', ')})} />
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPost({ ...post, selectedFile: base64})} />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" fullWidth type="submit">Submit</Button>
             </form>
        </Paper>        
    )
}

export default Form
