require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())

const faisalRoutes = require('./routes/faisal')
app.use('/faisals', faisalRoutes)

app.listen(process.env.PORT, () => {
  console.log('Faisal Service jalan di port ' + process.env.PORT)
})