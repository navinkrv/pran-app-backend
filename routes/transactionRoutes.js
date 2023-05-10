const { getAllTransactionsByUser } = require("../controllers/transactionController")
const auth =require("../middleware/auth")
const router=require("express").Router()

router.get("/getAllTransaction",auth,getAllTransactionsByUser)

module.exports=router