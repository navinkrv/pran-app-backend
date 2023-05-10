const { getAllPosts, getPostById, getAllPostByUser, getAllPostBySubject, getPyq, getRecentPosts } = require("../controllers/postController")
const auth = require("../middleware/auth")


const router= require("express").Router()
router.get("/allPosts",auth, getAllPostByUser)
router.post("/allPostsBySubject",auth, getAllPostBySubject)
router.get("/allPyq",auth, getPyq)
router.get("/recents",auth, getRecentPosts)


router.get("/post/:id",auth,getPostById)



module.exports=router