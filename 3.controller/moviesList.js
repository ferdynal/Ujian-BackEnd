const db = require('../1.database')

module.exports = {
    getAllMovie : (req,res) => {
        var sql = `select * from movies;`
        db.query(sql, (err,result)=>{
            if(err) throw err
            res.send(result)
        })
    },
    addMovies : (req,res)=>{
        var data = {
            name : req.body.name,
            year : req.body.year,
            description : req.body.description

        }
        var sql = `insert into movies set?;`
        db.query(sql,data,(err,result)=>{
            if (err) throw err
            res.redirect('/movielist/getAllMovie')
        })
    },
    updateMovies : (req,res)=>{
        var id = req.params.id
        var name = req.body.name
        var year =req.body.year
        var description = req.body.description
        var sql = `update movies set name = '${name}',year = ${year},description = '${description}' where id = ${id};`
        db.query(sql,(err,result)=>{
            if(err) throw err
            res.redirect('/movielist/getAllMovie')
        })
    },
    deleteMovies : (req,res) => {
        var id = req.params.id
        var sql= `delete from movies where id = ${id};`
        db.query(sql, (err,result)=>{
            if(err) throw err 
            res.redirect('/movielist/getAllMovie')
        })
    }
}