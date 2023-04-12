
module.exports=(sequelize,DataTypes)=>{
    const Course= sequelize.define("course",{
        course:{
            type:DataTypes.STRING,
            allowNull:false
        },
        sem:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        syllabus:{
            type:DataTypes.STRING,
            allowNull:false
        },
    })
    return Course;
}