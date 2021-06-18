import { Router } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import User from '../models/User.js'

const router = Router()

router.post('/signin', async (req, res) => {
    const { email, password } = req.body
    
    try {
        const user = await User.findOne({email})

        if (!user) {
            throw new Error('User is not in the database')
        }

        const isMatch = await bcrypt.compare(password, user.password)
        
        if (isMatch) {
            const token = jwt.sign({email: user.email, id: user._id}, process.env.SECRET, {expiresIn: 3*24*24*60})
            res.cookie('jwt', token, {expire: 3*24*60*60})
            return res.status(201).json({profile: user, token})
        } else {
            return res.status(401).json({message: 'Wrong Password'})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: error.message})
    }
})

router.post('/signup', async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body

    try {
        const user = await User.findOne({email});

        if (user) {
            throw new Error('User Exist!')
        }

        if (password !== confirmPassword) {
            throw new Error('Passwords not the same')
        }   

        const salt = await bcrypt.genSalt(12)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = await User.create({name: `${firstName} ${lastName}`, email, password: hashedPassword})
        const token = jwt.sign({id: newUser._id, email: newUser.email}, process.env.SECRET, {expiresIn: 3*24*24*60})
        res.cookie('jwt', token, {maxAge: 3*24*60*60, httpOnly: true})
        console.log(req.cookies)
        return res.status(201).json({profile: newUser, token})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: error.message})
    }
})

export default router