require('dotenv').config({ path: __dirname + '/config/.env' })

export {}

const express = require('express')
const dotenv = require('dotenv')
const AuthRoute = require('./routes/AuthRoute')

const app = express()

app.use(express.json())
app.use('/api/auth', AuthRoute)

module.exports = app
