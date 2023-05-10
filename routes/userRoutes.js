const { getAllUsers, userLogin, userSignup, getUserData } = require("../controllers/userController");
const  auth  = require("../middleware/auth");


const router= require("express").Router();

router.get("/allUser", getAllUsers)
router.get("/userData",auth, getUserData)
router.post("/userLogin",userLogin)
router.post("/userSignup",userSignup)



module.exports=router