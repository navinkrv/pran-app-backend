const express= require("express")
const cors= require("cors");
const { urlencoded } = require("express");


const app= express();

//middlewares
app.use(cors());
app.use(urlencoded({extended:true}))
app.use(express.json())
//routers

const mailRouter=require("./routes/mailRoutes")
app.use("/api/mailer",mailRouter)

const userRouter=require("./routes/userRoutes")
app.use("/api/users",userRouter)

const postRouter=require("./routes/postRoutes")
app.use("/api/posts",postRouter)

const courseRouter=require("./routes/courseRoutes")
app.use("/api/courses",courseRouter)

//test api

app.get('/', (req,res)=>{
    res.send("API RUNNING at")

})


//server

app.listen(5000 , ()=>{
    console.log("Server is running");
})