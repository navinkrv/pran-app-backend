const { getAllUsers, userLogin } = require("../controllers/userController");
const { auth } = require("../middleware/auth");


const router= require("express").Router();

router.get("/allUser", getAllUsers)
router.post("/userLogin",userLogin)



module.exports=router