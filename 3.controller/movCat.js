const db = require('../1.database')

module.exports = {
    getAllMovcat : (req,res) => {
        var sql = `select m.name as name_movies, c.name as name_category from movcat 
                    join movies m on idmovie = m.id
                    join categories c on idcategory = c.id;`
        db.query(sql, (err,result)=>{
            if(err) throw err
            res.send(result)
        })
    },
    addMovcat : (req,res)=>{
        var data = {
            idmovie : req.body.name_movie,
            idcategory : req.body.name_category
        }
        var sql = `insert into movcat set?;`
        db.query(sql,data,(err,result)=>{
            if (err) throw err
            res.redirect('/movcat/getAllMovcat')
        })
    },
    deleteMovcat : (req,res) => {
        var id = req.params.id
        var sql= `delete from movcat where id = ${id};`
        db.query(sql, (err,result)=>{
            if(err) throw err 
            res.redirect('/movcat/getAllMovcat')
        })
    }
}