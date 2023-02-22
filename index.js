const express = require('express');
const nodemon = require('nodemon');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const port = process.env.port || 7800
const mongoose = require('mongoose');
const cors = require('cors');
const register = require("./register")(router);
const cookieParser = require("cookie-parser");
app.use(cookieParser())
app.use(express.json())
mongoose.connect('mongodb+srv://rockeyparekh007:7623838835@cluster0.hsf2kbf.mongodb.net/codelite',(err)=>{
    if (err) {
        console.log("Kuchh galat kiya hai!!");
    }else {
        console.log("Sahi ja rahe ho...");
    }
});

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors({
    origin: ["http://codelite.epizy.com","http://localhost:4200"],
    credentials: true,
})
);

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id,authorization");
  
    next();
});

app.use("/",register)

app.listen(port, () =>{
    console.log("Serer is connected", port);
});