const jwt = require('jsonwebtoken')
const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser())
module.exports = (req,res,next)=>{
  try{
      const token =  req.cookies.token || req.headers.authorization 
    //   return res.json(token);
    console.log( req.headers.authorization );
    const decode = jwt.verify(token, "technology")
    req.userData = decode;   
    // return res.json(decode);
    next();
  }catch(error){
    res.json({success:false, message:error})
  }
}