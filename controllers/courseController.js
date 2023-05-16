const db= require("../models")

const Course= db.courses;


// 1. get all courses

const getAllCourseDetails=async(req,res)=>{

    const courses= await Course.findAll({})
    res.status(200).send(courses)
}

// 2. get all course list

const getCourseList=async(req,res)=>{
 let courses=await Course.findAll({})

 courses= courses.map((item)=>{
    return item.course
 })
 courses=courses.filter((item,
    index) => courses.indexOf(item) === index);
   if(courses){

      res.status(200).send(courses)
   }
   else{
      res.status(200).send({msg:"something Went wrong !"})
         }
}

// 3. get sem list
const getSemList=async(req,res)=>{
    let sem=await Course.findAll({where:{course:req.params.course}})
   
    sem= sem.map((item)=>{
       return item.sem
    })
    sem=sem.filter((item,
       index) => sem.indexOf(item) === index);
   if(sem){

      res.status(200).send(sem)
   }
   else{
      res.status(200).send({msg:"SomeThing went wrong!"})
   }
   }
   

module.exports={
    getAllCourseDetails,
    getCourseList,
    getSemList
}