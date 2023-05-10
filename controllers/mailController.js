const nodemailer = require("nodemailer");

const username="pran7181@gmail.com"
const password="oyzkgkuijelxmxrm"

const otpSender=(req,res)=>{
async function main() {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: username, // generated ethereal user
        pass: password, // generated ethereal password
      },
    });
  
    let info = await transporter.sendMail({
      from: "pran7181@gmail.com", // sender address
      to: req.body.email, // list of receivers
      subject: "OTP from PRAN Application", // Subject line
      text: req.body.otp+" is the OTP for verification in PRAN App", // plain text body
    });
  
        res.status(200).send({msg: "msg sent successfully"})
    }
  
  main().catch((err)=>{res.send({error:err})});
  
}

const contactMailer=(req,res)=>{
    async function main() {
        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true, // true for 465, false for other ports
          auth: {
            user: username, // generated ethereal user
            pass: password, // generated ethereal password
          },
        });
      
        let info = await transporter.sendMail({
          from: req.body.email, // sender address
          to: "pran7181@gmail.com", // list of receivers
          subject: "Enquiry from  PRAN Application", // Subject line
          html: "<h1>"+req.body.email+"</h1><h2>Title</h2><p>"+req.body.title+"</p><br><h2>Description</h2><p>"+req.body.desc+"</p>", // plain text body
        });
      
            res.status(200).send({msg: "msg sent successfully"})
        }
      
      main().catch((err)=>{res.send({error:err})});
    
}


module.exports= {
    otpSender,
    contactMailer
}