const express = require('express')
const dotenv = require('dotenv')

const app = express()

app.use(express.json())

module.exports = app
