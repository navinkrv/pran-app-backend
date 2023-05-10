const db= require("../models")

const Post= db.posts;
const User=db.users;
const Recent=db.recents;

//1. get all posts

const getAllPosts= async(req,res)=>{
        const posts= await Post.findAll()
        res.status(200).send(posts);
}

//2. get post by id

const getPostById= async(req,res)=>{

    const post=await Post.findOne({where:{id:req.params.id}})
    if(post){

        const recents=await Recent.findAll({where:{username:req.username}})
        // console.log(recents.length);
        if(recents.length<5){
            let flag=0
            recents.map((item)=>{
                if (item.post_id==req.params.id){
                    flag=1;
                }
            })
           
            if(flag==0){

                const recent=await Recent.create({
                    username:req.username,
                    post_id:req.params.id
                })
                await recent.save()
            }
        }
        else{

            let flag=0
            recents.map((item)=>{
                if (item.post_id==req.params.id){
                    flag=1;
                }
            })
            
            if(flag==0){
                
                await Recent.destroy({where:{id:recents[0].id}})
                const recent=await Recent.create({
                    username:req.username,
                    post_id:req.params.id
                })
                await recent.save()
            }
        }
        

        



        res.status(200).send(post)
    }
    else{
        res.status(200).send({msg:"No data found!"})
    }
}


//3. get All post by user

const getAllPostByUser=async (req,res)=>{
    const user =await User.findOne({where:{username:req.username}});
    
    //check subscription

    
        // res.status(200).send({subscription_status:user.subs_type})
        let posts =await Post.findAll({where:{course:user.course,sem:user.sem}})
        posts=posts.reverse().slice(0,5)
        res.status(200).send(posts)
 







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

// 6. get recent Posts

const getRecentPosts= async (req,res)=>{
        const recents= await Recent.findAll({where:{username:req.username}})

        if (recents) {
            res.status(200).send(recents)

        }
        else{
            res.status(200).send({msg:"No Recents Available"})
        }
}







module.exports={
    getAllPosts,
    getPostById,
    getAllPostByUser,
    getAllPostBySubject,
    getPyq,
    getRecentPosts
}