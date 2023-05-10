

module.exports=(sequelize,DataTypes)=>{
    const Transaction= sequelize.define("transaction",{
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false
        },
        amount:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        transaction_id:{
            type:DataTypes.STRING,
            allowNull:false
        },
        status:{
            type:DataTypes.STRING,
            allowNull:false
        },
       
    })
    return Transaction;
}