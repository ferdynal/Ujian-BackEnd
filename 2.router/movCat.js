const router = require('express').Router()
const { getAllMovcat,
        addMovcat,
        deleteMovcat } = require('./../3.controller').movCat

router.get('/getAllMovcat', getAllMovcat)
router.post('/addMovcat', addMovcat)
router.delete('/deleteMovcat/:id', deleteMovcat)

module.exports = router