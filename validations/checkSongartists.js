const checkArtist = (req, res, next) => {
    if (req.body.artist) {
        return next()
    } else {
        res.status(404).json({ error: `Provide Artists' name` })
    }
}

const checkAlbums = (req, res, next) => {
    if(req.body.albums) {
        next()
    } else {
        res.status(404).json({ error: `Provide Artists' Album Total, not including Compilations` })
    }
}

const checkRoots = (req, res, next) => {
    if(req.body.roots) {
        next()
    } else {
        res.status(404).json({ error: `Provide Artists' Roots. Where were they predominately raised?` })
    }
}

const checkSunSign = (req, res, next) => {
    if(req.body.sun_sign) {
        next()
    } else {
        res.status(404).json({ error: `Provide Artists' Sun Sign` })
    }
}

const checkNetWorth = (req, res, next) => {
    if(req.body.net_worth) {
        next()
    } else {
        res.status(404).json({ error: `Provide Artists' Approximate Net Worth` })
    }
}

const checkOnTour = (req, res, next) => {
    if(req.body.on_tour) {
        next()
    } else {
        res.status(404).json({ error: `on_tour must be True or False` })
    }
}

const checkIsAlive = (req, res, next) => {
    if(req.body.is_alive) {
        return next()
    } else {
        res.status(404).json({ error: `is_alive must be True or False` })
    }
}

const checkHasChildren = (req, res, next) => {
    if(req.body.has_children) {
        next()
    } else {
        res.status(404).json({ error: `Provide Artists' No. of Children` })
    }
}

const checkOfficialWebsite = (req, res, next) => {
    if(req.body.official_website) {
        next()
    } else {
        res.status(404).json({ error: `Provide Artists' Official Website` })
    }
}

const checkSocialMedia = (req, res, next) => {
    if(req.body.social_media) {
        next()
    } else {
        res.status(404).json({ error: `Provide Artists' Social Media` })
    }
}


module.exports = {  
    checkArtist, 
    checkAlbums, 
    checkRoots,
    checkSunSign,
    checkNetWorth,
    checkOnTour,
    checkIsAlive,
    checkHasChildren,
    checkOfficialWebsite,
    checkSocialMedia
}