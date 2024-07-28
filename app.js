const cors = require('cors')
const express = require('express')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`Ola, tune into these Tunes`)
})

// const songsController = require('./controllers/songsController.js')
// app.use('/songs', songsController)

app.get('*', (req, res) => {
    res.status(404).send(`Page not found`)
})


module.exports = app