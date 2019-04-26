const router = require('express').Router()
const { getAllCategories,
        addCategories,
        updateCategories,
        deleteCategories } = require('./../3.controller').categoryList

router.get('/getAllcategories', getAllCategories)
router.post('/addcategories', addCategories)
router.put('/updatecategories/:id', updateCategories)
router.delete('/deletecategories/:id', deleteCategories)

module.exports = router