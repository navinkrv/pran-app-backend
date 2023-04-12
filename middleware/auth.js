const jwt = require("jsonwebtoken")
const SECRET_KEY="PRANAUTH"
const db= require("../models/index")
const User=db.users;

const auth=(req,res,next)=>{

    try{

            const {auth_token}= req.body
            if(!auth_token){
                res.status(400).send({msg:"Unauthorised Access!"})
            }

            const username = jwt.verify(auth_token,SECRET_KEY).username
            const existingUser= User.findOne({where:{username:username}})

            if(!existingUser){
                res.status(404).send({msg:"Unauthorised Access!"})
                }
            req.username=username

                next();
            
    }
    catch(err){
        console.log(err);
        res.status(404).send({msg:"Unauthorised Access!"})
    }
    
}
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5hdmlua3J2QGdtYWlsLmNvbSIsImlhdCI6MTY4MDM3NzM2Nn0.EiWYiZGskYeeHqaKIDkuhK7u2ganiXLLoGIwjyQv-W0

module.exports=auth