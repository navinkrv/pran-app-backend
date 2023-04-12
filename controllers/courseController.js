const db= require("../models")

const Course= db.courses;


// 1. get all courses

const getAllCourseDetails=async(req,res)=>{

    const courses= await Course.findAll({})
    res.status(200).send(courses)
}



module.exports={
    getAllCourseDetails
}