const express = require('express')
const songs = express.Router()
const { getAllSongs, getSong, createSong } = require(`../queries/songs`)

songs.get('/', async (req, res) => {
    const allSongs = await getAllSongs()
    if(allSongs[0]) {
        res.status(200).json(allSongs)
    } else {
        res.status(500).json({ error: "Internal Service Error" })
    }
})

songs.get('/:id', async (req, res) => {
    const { id } = req.params
    const singleSong = await getSong(id)
    if(singleSong) {
        res.status(200).json(singleSong)
    } else {
    res.status(404).json({ error: `Song Not Found`})
    }
})

songs.post('/', async (req, res) => {
    const newSong = await createSong(req.body)
    res.json(newSong)
})


module.exports = songs