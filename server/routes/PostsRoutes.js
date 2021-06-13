import express from 'express'
import mongoose from 'mongoose'
import { getPosts } from '../controllers/PostController.js'
import PostMessage from '../models/PostModel.js'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const postMessages = await PostMessage.find({}).exec()
        return res.status(201).json(postMessages)
    } catch (err) {
        return res.status(400).json({err: err.message})
    }
})

router.post('/', async (req, res) => {
   const post = req.body

   try {
       const newPost = await PostMessage.create(post)
       return res.status(200).json(newPost)
   } catch(err) {
       console.log(err)
       return res.status(401).json({err: err.message})
   }
})

router.put('/:id', async (req, res) => {
    const { id: _id } = req.params
    const post = req.body

    if (!mongoose.Types._ObjectId.isValid(_id)) return res.status(401).json({err: 'Id is not valid'})

    try {
        const updatedMessage = await PostMessage.findByIdAndUpdate(_id, post, {new: true})
        return res.status(201).json(updatedMessage)
    } catch (err) {
        return res.status(404).json({err: err.message})
    }
})

export default router
