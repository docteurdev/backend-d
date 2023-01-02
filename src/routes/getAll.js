const { person } = require("../db/sequelize")

module.exports= (app) =>{
    app.get('/apis/persons', (req, res) =>{
        person.findAll().then(data =>{
            res.send(data)
        }).catch(error =>{
            res.send(error)
        })
    })
}