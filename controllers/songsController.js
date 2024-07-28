const express = require('express')
const songs = express.Router({ mergeParams: true })
const { getSongArtist } = require('../queries/songartists') // are we pulling in getSongArtist to have access to the songArtist_id ?
const { getAllSongs, getSong, deleteSong, updateSong, newSong } = require('../queries/songs')
const { checkSong, checkArtist, checkAlbum, checkTime, checkIsAlive } = require('../validations/checkSongs')


songs.get('/', async (req, res) => {
    const { songartist_id } = req.params
    const songs = await getAllSongs(songartist_id)
    const songartist = await getSongArtist(songartist_id)

    if (songartist.id) {
        res.status(200).json({ ...songartist, songs })
    } else {
        res.status(500).json({ error: 'SongArtist Not Found or Server Error' })
    }
})

songs.get('/:id', async (req, res) => {
    const { songartist_id, id } = req.params
    const song = await getSong(id)
    const songartist = await getSongArtist(songartist_id)

    if (song) {
        res.status(200).json({ ...songartist, song })
    } else {
        res.status(404).json({ error: 'Song Not Found' })
    }
})

songs.delete('/:id', async (req, res) => {
    const { id } = req.params
    const deletedSong = await deleteSong(id)
    if (deletedSong.id) {
        res.status(200).json({ message: 'Successfully Deleted Song' })
    } else {
        res.status(404).json({ error: 'Song Not found' })
    }
})

songs.put('/:id', checkSong, checkArtist, checkAlbum, checkTime, checkIsAlive, async (req, res) => {
    const { songartist_id, id } = req.params
    const updatedSong = await updateSong({ songartist_id, id, ...req.body })
    if (updatedSong.id) {
        res.status(200).json(updatedSong)
    } else {
        res.status(404).json({ error: 'Song Not found' })
    }
})

songs.post('/', checkSong, checkArtist, checkAlbum, checkTime, checkIsAlive, async (req, res) => {
    const { songartist_id } = req.params
    const newSong = await newSong({ ...req.body, songartist_id })
    res.status(200).json(newSong)
})


module.exports = songs