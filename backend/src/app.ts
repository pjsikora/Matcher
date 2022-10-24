require('dotenv').config({ path: __dirname + '/config/.env' })

export {}

const express = require('express')
const dotenv = require('dotenv')
const AuthRoute = require('./routes/AuthRoute')
const userRoute = require('./routes/userRoute')
const errorMiddleware = require('./middleware/errorMiddleware')

const app = express()

app.use(express.json())
app.use('/api/auth', AuthRoute)
app.use('/api/user', userRoute)
app.use(errorMiddleware)

module.exports = app
