import express from 'express'
import mongoose from 'mongoose'

import { getPosts } from '../controllers/PostController.js'
import PostMessage from '../models/PostModel.js'
import { auth } from '../middleware/Auth.js'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const postMessages = await PostMessage.find({}).exec()
        return res.status(201).json(postMessages)
    } catch (err) {
        console.log(err)
        return res.status(400).json({err: err.message})
    }
})

router.post('/', auth, async (req, res) => {
   const post = req.body

   try {
       const newPost = await PostMessage.create(post)
       return res.status(200).json(newPost)
   } catch(err) {
       console.log(err)
       return res.status(401).json({err: err.message})
   }
})

router.put('/:id', auth, async (req, res) => {
    const { id: _id } = req.params
    const post = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(401).json({err: 'Id is not valid'})

    try {
        const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true})
        return res.status(201).json(updatedPost)
    } catch (err) {
        console.log(err)
        return res.status(404).json({err: err.message})
        
    }
})

router.delete('/:id', auth, async (req, res) => {
    const { id: _id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(401).json({err: 'Id is not valid'})
    
    try {
        await PostMessage.findByIdAndRemove(_id)
        return res.status(201).json({msg: 'Post deleted'})
    } catch(err) {
        console.log(err)
        return res.status(404).json({err: err.message})
    }
})

router.put('/:id/likePost', auth, async (req, res) => {
    const { id: _id } = req.params

    if (!req.userId) return res.status(400).json({message: "Unauthenticated"})

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(401).json({err: 'Invalid Id'})

    try {
        const post = await PostMessage.findById(_id)
        const index = post.likes.findIndex((id) => id === String(req.userId))

        if (index === -1) {
            post.likes.push(req.userId)
        } else {
            post.likes = post.likes.filter((id) !== String(req.userId))
        }

        const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new: true})
        return res.status(201).json(updatedPost)
    } catch (err) {
        console.log(err)
        return res.status(401).json({err: err.message})
    }
})

export default router
