const mongoose = require('mongoose')

const databaseConnect = () => {
  console.log(process.env.DATABASE_URL)
  mongoose.connect(process.env.DATABASE_URL, (error: any) => {
    !error && console.log('Connected to database')
  })
}

module.exports = databaseConnect
