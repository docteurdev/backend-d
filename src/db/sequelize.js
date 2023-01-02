const {Sequelize, DataTypes} = require("sequelize");
const PersonModel= require('../model/persone');



const sequelize= new Sequelize(process.env.DB_NAME || 'testy',process.env.DB_USER || 'root', process.env.DB_PASSWORD || 'root',{
    host:process.env.DB_HOST || 'localhost',
    port:process.env.PORT || 3306,
    dialect: 'mysql',
    // dialectOptions:{
    //     timezone: 'Etc/GMT-2'
    // },
    // logging: false
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