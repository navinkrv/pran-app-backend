module.exports=(sequelize,DataTypes)=>{
    const User= sequelize.define("user",{

        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        number:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        course:{
            type:DataTypes.STRING,
            allowNull:false
        },
        sem:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        college:{
            type:DataTypes.STRING,
            allowNull:false
        },
        lastLogin:{
            type:DataTypes.DATE,
            allowNull:false
        },

    })

    return User
}