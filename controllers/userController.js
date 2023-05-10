const db= require("../models/index")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const SECRET_KEY="PRANAUTH"

const User=db.users;


// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5hdmlua3J2QGdtYWlsLmNvbSIsImlhdCI6MTY4MjI2MDE1Nn0.WN5H110z9D6VF5isMqeFwyX63bDj-GZrDbX8syVxpfE"

//1. get all users 

const getAllUsers= async(req,res)=>{
    const users= await User.findAll({})

    // users.map(async(user)=>{

    //     if(user.id>=198){

    //     const hashedPassword= await bcrypt.hash(user.password,10)

    //     await User.update({password:hashedPassword},{where:{username:user.username}})
    //     }

    // })


    res.status(200).send(users)
}

//2 . login

const userLogin=async(req,res)=>{


        try{
        const {username,password}= req.body
        // const token = jwt.sign({username:username},SECRET_KEY)
        
        const existingUser= await User.findOne({where:{username:username}})

        if(!existingUser){
            res.status(200).send({msg:"User Not Found"})
        }

        if(await bcrypt.compare(password,existingUser.password)==true){
            const token= jwt.sign({username:existingUser.username},SECRET_KEY);
            await User.update({token:token},{where:{username:username}})
            res.status(200).send({msg:"Login Successfully",auth_token:token})
        }
        else{
            res.send({msg:"incorrect password"})
        }
     }
        catch(err){
            console.log(err);
        }
}

// 3. signup 

const userSignup=async(req,res)=>{


    const hashedPassword= bcrypt.hash(req.body.password)
    try{

        const user= await User.create({
        name:req.body.name,
        username:req.body.username,
        password:hashedPassword,
        number:req.body.number,
        course:req.body.course,
        sem:req.body.sem,
        college:req.body.college,
        
    })

    await user.save()
    const token= jwt.sign({username:user.username},SECRET_KEY);

    res.status(200).send({msg:"Signup Successfully",auth_token:token})

}
catch(err){
    console.log(err);
}
}


// 3. get user data

const getUserData= async(req,res)=>{
    try{
        const user=await User.findOne({where:{username:req.username}})

        if(Date.parse(user.due_date)<Date.parse(new Date())) {

           await User.update({subs_type:"Expired"},{where:{username:user.username}})

            // res.status(200).send({subscription_status:"Expired"})
            res.status(200).send({userData:user,subscription_status:"Expired"})

        }else{
            res.status(200).send({userData:user,subscription_status:user.subs_type})
        }

    }
    catch(err){
            res.send({msg:"Something Went Wrong!"});
    }
}





//expports

module.exports={
    getAllUsers,
    userLogin,
    userSignup,
    getUserData
}