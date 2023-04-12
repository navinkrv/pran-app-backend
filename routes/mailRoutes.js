const { otpSender, contactMailer } = require("../controllers/mailController");
const auth = require("../middleware/auth");

const router=require("express").Router();

router.post("/otp", otpSender)
router.post("/contactMailer",contactMailer)

module.exports=router;