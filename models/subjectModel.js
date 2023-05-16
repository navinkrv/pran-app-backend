module.exports=(sequelize,DataTypes)=>{
    const Subject= sequelize.define("subject",{
        username:{
            type:DataTypes.STRING,
            allowNull:false
        },
        post_id:{
            type:DataTypes.STRING,
            allowNull:false
        }
       
    })
    return Recent;
}