const db = require('../db/dbConfig')

const getAllSongs = async (songartist_id) => {
    try {
        const allSongs = await db.any("SELECT * FROM songs WHERE songartist_id=$1", songartist_id)
        return allSongs
    } catch (err) {
        return (err)
    }
}

const getSong = async (id) => {
    try {
        const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id)
        return oneSong
    } catch (err) {
        return (err)
    }
}

const deleteSong = async (id) => {
    try {
        const deletedSong = await db.one("DELETE FROM songs WHERE id=$1 RETURNING *", id)
        return deletedSong
    } catch (err) {
        return (err)
    }
}

const updateSong = async (song) => {
    try {
        const updatedSong = await db.one("UPDATE songs SET song=$1, artist=$2, album=$3, time=$4, is_popular=$5, is_favorite=$6, songartist_id=$7 WHERE id=$8 RETURNING *",
            [
                song.song,
                song.artist,
                song.album,
                song.time, 
                song.is_popular,
                song.is_favorite,
                song.songartist_id,
                song.id
            ]
        )
        return updatedSong
    } catch (err) {
        return err
    }
}

const newSong = async (song) => {
    try {
        const newSong = await db.one("INSERT INTO songs (song, artist, album, time, is_popular, is_favorite, songartist_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [
              song.song,
              song.artist,
              song.album,
              song.time, 
              song.is_popular,
              song.is_favorite,
              song.songartist_id
            ]
        )
        return newSong
    } catch (err) {
        return err
    }
}


module.exports = {
    getAllSongs,
    getSong, 
    deleteSong,
    updateSong,
    newSong,
}