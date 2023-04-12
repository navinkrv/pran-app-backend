const db= require("../models")

const Post= db.posts;
const User=db.users;

//1. get all posts

const getAllPosts= async(req,res)=>{
        const posts= await Post.findAll()
        res.status(200).send(posts);
}

//2. get post by id

const getPostById= async(req,res)=>{

    const post=await Post.findOne({where:{id:req.params.id}})
    res.status(200).send(post)
}


//3. get All post by user

const getAllPostByUser=async (req,res)=>{
    const user =await User.findOne({where:{username:req.username}});

    const posts =await Post.findAll({where:{course:user.course,sem:user.sem}})
    res.send(posts)

    // const posts= await Post.findAll({where:{course:}})

}




//4. Get all posts by subject (as per users)

const getAllPostBySubject =async(req,res)=>{
    const user =await User.findOne({where:{username:req.username}});

    const posts =await Post.findAll({where:{course:user.course, sem:user.sem, sub_id:req.body.sub_id}})
    res.send(posts)
}

// 5. get all PYQ

const getPyq =async (req,res)=>{
    const user =await User.findOne({where:{username:req.username}});

    const posts =await Post.findAll({where:{course:user.course, sem:user.sem, unit_id:"100"}})
    res.send(posts)
}

// 6. get ebooks



module.exports={
    getAllPosts,
    getPostById,
    getAllPostByUser,
    getAllPostBySubject,
    getPyq
}