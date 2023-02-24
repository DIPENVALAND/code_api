
const photo = require('./model/img');
const jwt = require('jsonwebtoken');
// const secretkey = 'secretkey'
const cloudinary = require('cloudinary');
const bodyParser = require('body-parser');
const upload = require('./multer');
module.exports  =function (router){
  
    router.post('/upload', upload.single('myFile'), async function (req, res) {
        console.log(req.file);
        const upload = await cloudinary.uploader.upload(req.file.path)
        const file = new photo({
            originalname: req.file.originalname,
            mimetype: req.file.mimetype,
            size: req.file.size,
            url: upload.secure_url
        });

        file.save(function (err){
            if(err){
                res.status(500).send({success:false, message:'Error saving file to database'});
            }else{
                res.send({success:true, message:'File uploaded successfully'})
            }
        });
    });
  return router
}