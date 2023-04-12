const db= require("../models/index")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const SECRET_KEY="PRANAUTH"

const User=db.users;

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
            res.status(404).send("msg:User Not Found")
        }

        if(await bcrypt.compare(password,existingUser.password)==true){
            const token= jwt.sign({username:existingUser.username},SECRET_KEY);

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

const userSignup=()=>{

}






//expports

module.exports={
    getAllUsers,
    userLogin
}