export {}

const { app } = require('./app')
const databaseConnect = require('./config/database')

databaseConnect()

app.listen(6000, () => {
  console.log('Server is albert chuj')
})
