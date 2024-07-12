const db = require('../db/dbConfig.js')

const getAllSongss = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM tuners")
        return allSongs
    } catch (error) {
        return error;
    }
}

const getSong = async (id) => {
    
}

module.exports = { getAllSongs, getSong }