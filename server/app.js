const express = require('express')
const cors = require('cors')

const anime = require('./anime.json')
const logger = require("./logger")

const app = express()

// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(logger)







app.get('/', (req, res) => {
  res.send('This is an Anime API!')
})

// an index action - GET  /anime
app.get('/anime', (req, res) => {
  res.send(anime)
})

// a show action - GET /anime/:id
app.get('/anime/:id', (req, res) => {
    console.log(req.params)
    const idx = req.params.id

    const animes = anime[idx-1]

    if(!animes) {
        res.status(404).json({message: `Anime with id ${idx} not found` })
    } else {
    res.send(animes)
    }  
})

// a create action - POST /anime
app.post('/anime', (req,res) => {
   
    console.log("line 36", req.body)
    const animes = req.body
    anime.push(animes)
    res.status(201).send(animes)

})

module.exports = app


