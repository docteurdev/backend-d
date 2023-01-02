module.exports=(sequelize, DataTypes) =>{
    return sequelize.define('Person',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nom:{
            type: DataTypes.STRING,
 
         },
         prenom:{
            type: DataTypes.STRING,
           
 
         },
         telphone:{
            type: DataTypes.STRING,
           
         },
    })
}