const router = require('express').Router()
const { getAllMovie,
        addMovies,
        deleteMovies,
        updateMovies } = require('./../3.controller').movieList

router.get('/getAllMovie', getAllMovie)
router.post('/addMovies', addMovies)
router.put('/updateMovie/:id', updateMovies)
router.delete('/deleteMovie/:id', deleteMovies)

module.exports = router