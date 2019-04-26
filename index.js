const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 5000
app.use(bodyParser.json())

const { moviesList,
        categoryList,
        movCat } = require('./2.router')

app.get('/' , (req,res) => {
    res.send('<h1>Ini Home Page</h1>')
})

app.use('/movielist', moviesList)
app.use('/categorylist', categoryList)
app.use('/movcat', movCat)

app.listen(port, ()=>console.log(`connected on ${port}`))