const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const app = express()
const bodyParser = require('body-parser')

const employees = require('./routes/employees')
const clientUrl = process.env.CLIENT_URL || 'http://localhost:3000'

const corsOptions = {
  origin: clientUrl,
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/employees', employees)

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

module.exports = app
