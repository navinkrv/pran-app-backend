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

const transactionRouter=require("./routes/transactionRoutes")
app.use("/api/txn",transactionRouter)

//test api

app.get('/', (req,res)=>{
    res.send("API RUNNING now at "+process.env.PORT)

})


//server

app.listen( process.env.PORT , ()=>{
    console.log("Server is running  ");
})