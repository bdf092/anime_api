function logger(req, res, next){
    console.log(req.method, req.originalURL)
    next()
}

module.exports = logger
