const db=require("../models")

const Txn=db.transactions;

// 1. get all transactions by user 

const getAllTransactionsByUser=async(req,res)=>{
        const txns=await Txn.findAll({where:{username:req.username}})

        res.status(200).send(txns)
}

// 2. add transaction by a user

// 3. update transaction status and update the plan for a user




module.exports={
    getAllTransactionsByUser
}