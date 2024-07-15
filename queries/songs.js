const db = require('../db/dbConfig.js')

const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs")
        return allSongs
    } catch (error) {
        return error;
    }
}

const getSong = async (id) => {
    try {
        const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id)
        return oneSong
    } catch (error) {
        return error
    }
}

const createSong = async (song) => {
    try {
        const newSong = await db.one(
            "INSERT INTO songs (song, artist, album, time, is_alive) VALUES ($1, $2, $3, $4, $5) RETURNING *", 
            [song.song, song.artist, song.album, song.time, song.is_alive]
        )
        return newSong
    } catch (error) {
        throw error
    }
}

module.exports = { getAllSongs, getSong, createSong }