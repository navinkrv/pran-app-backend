const { getAllCourseDetails } = require("../controllers/courseController")

const router= require("express").Router()

router.get("/allCourses",getAllCourseDetails)

module.exports=router