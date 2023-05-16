const { getAllCourseDetails, getCourseList, getSemList } = require("../controllers/courseController")

const router= require("express").Router()

router.get("/allCourses",getAllCourseDetails)
router.get("/courseList",getCourseList)
router.get("/semList/:course",getSemList)

module.exports=router