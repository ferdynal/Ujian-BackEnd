const db = require('../1.database')

module.exports = {
    getAllCategories : (req,res) => {
        var sql = `select * from categories;`
        db.query(sql, (err,result)=>{
            if(err) throw err
            res.send(result)
        })
    },
    addCategories : (req,res)=>{
        var data = {
            name : req.body.name
        }
        var sql = `insert into categories set?;`
        db.query(sql,data,(err,result)=>{
            if (err) throw err
            res.redirect('/categorylist/getAllcategories')
        })
    },
    updateCategories : (req,res)=>{
        var id = req.params.id
        var name = req.body.name
        var sql = `update categories set name = '${name}' where id = ${id};`
        db.query(sql,(err,result)=>{
            if(err) throw err
            res.redirect('/categorylist/getAllcategories')
        })
    },
    deleteCategories : (req,res) => {
        var id = req.params.id
        var sql= `delete from categories where id = ${id};`
        db.query(sql, (err,result)=>{
            if(err) throw err 
            res.redirect('/categorylist/getAllcategories')
        })
    }
}