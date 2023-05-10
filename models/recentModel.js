

module.exports=(sequelize,DataTypes)=>{
    const Recent= sequelize.define("recent",{
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