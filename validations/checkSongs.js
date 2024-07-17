const checkSong = (req, res, next) => {
    if (req.body.song) {
        return next()
    } else {
        res.status(400).json({ error: `What Song you wanna Sing?` })
    }
}

const checkBoolean = (req, res, next) => {
    if(req.body.is_alive) {
        return next()
    } else {
        res.status(400).json({ error: `is_alive must be True or False` })
    }
}

const checkArtist = (req, res, next) => {
    if(req.body.artist) {
        next()
    } else {
        res.status(400).json({ error: `We're going to need an Artist` })
    }
}

const checkAlbum = (req, res, next) => {
    if(req.body.album) {
        next()
    } else {
        res.status(400).json({ error: `What Album?`})
    }
}

const checkTime = (req, res, next) => {
    if(req.body.time) {
        next()
    } else {
        res.status(400).json({ error: `Provide the length of the song as well`})
    }
}


module.exports = { checkSong, checkBoolean, checkArtist, checkAlbum, checkTime }