import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import morgan from 'morgan'
import session from 'express-session'
import { default as connect } from 'connect-mongodb-session'

import postRoutes from './routes/PostsRoutes.js'

const app = express()
const MongoDBStore = connect(session)
dotenv.config()

const store = new MongoDBStore({
    uri: process.env.DB_CONNECT,
    collection: 'sessions'
})

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
app.use(cors())
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: store
}))

app.use('/posts', postRoutes)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})