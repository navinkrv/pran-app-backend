
module.exports=(sequelize,DataTypes)=>{
    const Post = sequelize.define("post",{
        course:{
            type:DataTypes.STRING,
            allowNull:false
        },
        sem:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        sub_id:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        unit_id:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        desc:{
            type:DataTypes.STRING,
            allowNull:false
        },
        link:{
            type:DataTypes.STRING,
            allowNull:false
        },
        author:{
            type:DataTypes.STRING,
            allowNull:false
        },
        approved:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        time:{
            type:DataTypes.DATE,
            allowNull:false
        },
        views:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
    })
    return Post
}