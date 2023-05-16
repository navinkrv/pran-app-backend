const jwt = require("jsonwebtoken")
const SECRET_KEY="PRANAUTH"
const db= require("../models/index")
const User=db.users;

const auth=(req,res,next)=>{

    try{

            const auth_token= req.headers.authorization.split(" ")[1]
            
            if(!auth_token){
                res.status(200).send({msg:"Unauthorised Access! Token not found"})
            }

            const username = jwt.verify(auth_token,SECRET_KEY).username
            const existingUser= User.findOne({where:{username:username}})

            if(!existingUser){
                res.status(200).send({msg:"Unauthorised Access! user not matched"})
                }
            req.username=username

                next();
           
    }
    catch(err){
        console.log(err);
        res.status(200).send({msg:"Unauthorised Access! some thing went wrong"})
    }
    
}
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5hdmlua3J2QGdtYWlsLmNvbSIsImlhdCI6MTY4MDM3NzM2Nn0.EiWYiZGskYeeHqaKIDkuhK7u2ganiXLLoGIwjyQv-W0

module.exports=auth