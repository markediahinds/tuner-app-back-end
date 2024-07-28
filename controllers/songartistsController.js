const express = require('express')
const songartist = express.Router({ mergeParams: true })

songartist.get('/', async (req, res) => {
    const { songartist_id } = req.params
    try {
        const allSongs = await getAllSongs(song_id)
        res.json(allSongs)
    } catch (err) {
        res.json(err)
    }
})