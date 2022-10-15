export {}

const app = require('./app')
const databaseConnect = require('./config/database')

databaseConnect()

app.listen(2137, () => {
  console.log('Server is albert chuj')
})
