const router = require('express').Router();
const express = require('express');
const Info = require('./model/info');
const jwt = require('jsonwebtoken');
const secretkey = 'secretkey'
const bodyParser = require('body-parser');
const app = express();
const auth = require('./middleware/api');

module.exports  =function (router){
    router.post('/info',async(req,res)=>{
        try{
            console.log(req.body)

            const user = new Info({
            Name: req.body.Name,
            Email: req.body.Email,
            Phone: req.body.Phone,
            Address: req.body.Address,
            Country: req.body.Country,
            Gander: req.body.Gender,
            Grade: req.body.Grade,
            Passingyear: req.body.Passingyear,
            Course: req.body.Course,
            Projectlink: req.body.Projectlink,
            Projectdes: req.body.Projectdes,
            Skill: req.body.Skill
            })

            let data = await user.save()
            res.json({success:true, message:"User added",data:data})}
            catch(error){
                res.json({success:false , message:"Something went wrong"})
                console.log(error);
            }
    });

    return router
}