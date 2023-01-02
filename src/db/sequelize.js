const {Sequelize, DataTypes} = require("sequelize");
const PersonModel= require('../model/persone');



const sequelize= new Sequelize('testy', 'root', 'root',{
    host:'localhost',
    port: 3306,
    dialect: 'mysql',
    dialectOptions:{
        timezone: 'Etc/GMT-2'
    },
    logging: false
})

const person= PersonModel(sequelize, DataTypes)


const connectDb= () =>{
    return sequelize.sync().then(_ =>{

    })
}

sequelize.authenticate()
         .then(_ => console.log("je suis bien connecté") )
         .catch(error => console.log(error))


module.exports={connectDb, person}