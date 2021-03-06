import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import morgan from 'morgan'
import session from 'express-session'
import { default as connect } from 'connect-mongodb-session'
import cookieParser from 'cookie-parser'

import postRoutes from './routes/PostsRoutes.js'
import userRoutes from './routes/UserRoutes.js'

const app = express()
dotenv.config()

const options = {
    useUnifiedTopology: true,  
    useNewUrlParser: true, 
    useCreateIndex: true
}

mongoose.connect(process.env.DB_CONNECT, options)
        .catch((err) => console.log(err))

mongoose.connection.on('error', () => {
    console.log('Post MongoDB conneciton error')
})

mongoose.connection.once('open', () => {
    console.log('MongoDB is running')
})

mongoose.set('useFindAndModify', false)

app.use(express.json({limit: "30mb"}))
app.use(express.urlencoded({extended: true, limit: "30mb"}))
app.use(morgan('dev'))
app.use(cors({credentials: true, origin: true}))
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Hello to Memories API')
})

app.use('/posts', postRoutes)
app.use('/user', userRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})