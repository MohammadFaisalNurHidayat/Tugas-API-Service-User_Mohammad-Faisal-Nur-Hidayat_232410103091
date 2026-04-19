require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())

const userRoutes = require('./routes/user')
app.use('/users', userRoutes)

app.listen(process.env.PORT, () => {
  console.log('User service jalan di port ' + process.env.PORT)
})