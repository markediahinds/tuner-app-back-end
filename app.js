const express = require('express')
const cors = require('cors')
const songartistsController = require('./controllers/songartistsController.js')
const app = express()

app.use(cors())
app.use(express.json())

app.use('/songartists', songartistsController)

app.get('/', (req, res) => {
    res.send(`Ola, tune into these Tunes`)
})


// const songsController = require('./controllers/songsController.js')
// app.use('/songs', songsController)

app.get('*', (req, res) => {
    res.status(404).send(`Page not found`)
})


module.exports = app