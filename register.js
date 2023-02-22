const router = require('express').Router();
const express = require('express');
const Loginuser = require('./model/reg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretkey = 'secretkey'
const bodyParser = require('body-parser');
// const api = require('../middleware/api')
const app = express();
const auth = require('./middleware/api')

module.exports  =function (router){
router.post('/register',async(req,res)=>{
    try{
      console.log(req.body)
        const pass = await bcrypt.hash(req.body.Password, 10);

        const user = new Loginuser({
            Username: req.body.Username,
            Email: req.body.Email,
            // Password: req.body.Password,
            Password: pass,
            roleid:"1"
        })

        let data = await user.save()
        res.json({success:true, message:"Register Successfully",data:data})}
        catch (error) {
            res.json({success:false , message:"Something went wrong"})
            console.log(error);
        }
});

router.post('/login', async (req, res) => {
    try {
    //   const { Email, Password } = req.body;
    console.log(req.body)

 const Email = req.body.Email
 const Password = req.body.Password
  
      const user = await Loginuser.findOne({ Email });
      if (!user) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        const isPasswordValid = await bcrypt.compare(Password, user.Password);
        
        console.log(Email, user.Password,isPasswordValid);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      const token = jwt.sign({ Email: Email }, 'technology');
  
      res.json({success:true, token:token, message: 'login successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

router.get('/home',auth,async(req,res)=>{
  try{
    const userEmail = req.userData.Email;
    const user = await Loginuser.findOne({ userEmail });
    res.status(200).json({success:true,data:user})
  }catch(err){
    res.status(500).json({ message: 'Internal server error' });
console.log(err)
  }
})


return router
}