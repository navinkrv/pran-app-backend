const {Sequelize,DataTypes }= require("sequelize")
const dbConfig= require("../dbConfig/dbconfig")


//connection

const sequelize= new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorAliases:false,

        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idle:dbConfig.pool.idle,

        }
    }
)

sequelize.authenticate()
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
})


let db={}

db.Sequelize= Sequelize
db.sequelize = sequelize

db.users= require("./userModel")(sequelize,DataTypes)
db.posts= require("./postModel")(sequelize,DataTypes)
db.courses= require("./courseModel")(sequelize,DataTypes)

db.sequelize.sync({force:false})
.then(()=>{
    console.log("re-sync success");
})

module.exports = db;