const db = require('../db/dbConfig.js')

const getAllSongArtists = async () => {
    try {
        const allSongArtists = await db.any("SELECT * FROM songartists")
        return allSongArtists
    } catch (error) {
        return error;
    }
}

const getSongArtist = async (id) => {
    try {
        const oneSongArtist = await db.one("SELECT * FROM songartists WHERE id=$1", id)
        return oneSongArtist
    } catch (error) {
        return error
    }
}

const deleteSongArtist = async (id) => {
    try {
        const removeSongArtist = await db.one("DELETE FROM songartists WHERE id=$1 RETURNING *", id)
        return removeSongArtist
    } catch (error) {
        return error
    }
}


const createSongArtist = async (songartist) => {
    try {
        const newSongArtist = await db.one(
            "INSERT INTO songartists (artist, albums, roots, sun_sign, net_worth, on_tour, is_alive, has_children, official_website, social_media) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *", 
            [songartist.artist, songartist.albums, songartist.roots, songartist.sun_sign, songartist.net_worth, songartist.on_tour, songartist.is_alive, songartist.has_children, songartist.official_website, songartist.social_media]
        )
        return newSongArtist
    } catch (error) {
        throw error
    }
}

const updateSongArtist = async (id, songartist) => {
    try {
        const alterArtist = await db.one("UPDATE songartists SET artist=$1, albums=$2, roots=$3, sun_sign=$4, net_worth=$5, on_tour=$6, is_alive=$7, has_children=$8, official_website=$9, social_media=$10 WHERE id=$11 RETURNING *", 
            [songartist.artist, songartist.albums, songartist.roots, songartist.sun_sign, songartist.net_worth, songartist.on_tour, songartist.is_alive, songartist.has_children, songartist.official_website, songartist.social_media, id]
        )
        return alterArtist
    } catch (error) {
        return error
    }
}


module.exports = { 
    getAllSongArtists, 
    getSongArtist, 
    deleteSongArtist,
    createSongArtist,
    updateSongArtist
}