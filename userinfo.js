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
            Gender: req.body.Gender,
            School: req.body.School,
            Score: req.body.Score,
            Years: req.body.Years,
            Collages: req.body.Collages,
            Course: req.body.Course,
            Grade: req.body.Grade,
            Passingyear: req.body.Passingyear,
            Project: req.body.Project,
            Plink: req.body.Plink,
            Pd: req.body.Pd,
            Skill: req.body.Skill,
            Git: req.body.Git,
            Linkdin: req.body.Linkdin,
            Facebook: req.body.Facebook
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