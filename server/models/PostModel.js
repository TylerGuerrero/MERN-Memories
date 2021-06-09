import mongoose from 'mongoose'

const { Schema, model } = mongoose

const postSchema = new Schema({
    title: {type: String, required: true},
    message: {type: String, required: true},
    creator: {type: String, required: true},
    tags: {type: [String], required: true},
    secledtedFile: {type: String, required: true},
    likeCount: {type: Number, required: true, default: 0},
}, {timestamps: true})

const PostMessage = model('Post', postSchema)
export default PostMessage