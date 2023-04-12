const { getAllPosts, getPostById, getAllPostByUser, getAllPostBySubject, getPyq } = require("../controllers/postController")
const auth = require("../middleware/auth")


const router= require("express").Router()
router.get("/allPosts",auth, getAllPostByUser)
router.get("/allPostsBySubject",auth, getAllPostBySubject)
router.get("/allPyq",auth, getPyq)


router.get("/post/:id",auth,getPostById)



module.exports=router